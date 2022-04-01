import { BigNumber, Contract } from "ethers";
import { call, put, select, takeLatest } from "redux-saga/effects";

import { GlobalDomains } from "app/appSelectors";
import { RewardsActions } from "app/containers/Rewards/slice";
import {
  ApproveAndDepositPayload,
  ApproveAndWithdrawPayload,
  Pool,
} from "app/containers/Rewards/types";
import { BNToFloat, floatToBN } from "common/format";
import { LiquidityPageDomains, LiquidityPageSelectors } from "./selectors";
import { LiquidityPageActions } from "./slice";
import { SwapFlashLoanNoWithdrawFee } from "abi/ethers-contracts";
import { getProviderOrSigner } from "app/containers/utils/contractUtils";
import { Web3Domains } from "app/containers/BlockChain/Web3/selectors";
import { Token, TokenSymbols } from "app/containers/Swap/types";
import {
  FromTransactionData,
  LiquidityPageState,
  SelectTokenToWithdrawPayload,
  WithdrawTokenAmountChangePayload,
} from "./types";
import { GenericGasResponse } from "app/providers/gasPrice";
import {
  Deadlines,
  formatDeadlineToNumber,
} from "app/containers/Rewards/utils/deadline";
import { zeroString } from "./constants";
import { divide, multiply } from "precise-math";

export function* buildTransactionData() {
  const depositTokenAmounts = yield select(
    LiquidityPageDomains.depositTokenAmounts
  );
  const depositRaw = yield select(LiquidityPageDomains.depositRaw);
  const tokens = yield select(GlobalDomains.tokens);
  const pool: Pool = yield select(LiquidityPageDomains.pool);
  const fromStateData: FromTransactionData = {
    tokens: [],
    total: 0,
  };
  const tokenAmounts = {};
  for (let tokenKey in depositTokenAmounts) {
    const v = depositTokenAmounts[tokenKey];
    const num = Number(v);
    const toSend = floatToBN(num, tokens[tokenKey].decimals);
    tokenAmounts[tokenKey] = toSend;
    if (num > 0) {
      fromStateData.tokens = [
        ...fromStateData?.tokens,
        {
          symbol: tokenKey,
          value: parseFloat(depositTokenAmounts[tokenKey]),
        },
      ];
      fromStateData.total =
        fromStateData.total + parseFloat(depositTokenAmounts[tokenKey]);
    }
  }

  try {
    const library = yield select(Web3Domains.selectLibraryDomain);
    const account = yield select(Web3Domains.selectAccountDomain);
    const targetContract = new Contract(
      pool.swapAddress || pool.address,
      pool.swapABI,
      getProviderOrSigner(library, account)
    );

    const shouldDepositWrapped =
      pool.swapAddress === undefined ? false : !depositRaw;

    const poolTokens = shouldDepositWrapped
      ? (pool.underlyingPoolTokens as Token[])
      : pool.poolTokens;

    const minToMint = yield call(
      (targetContract as SwapFlashLoanNoWithdrawFee).calculateTokenAmount,
      poolTokens.map(({ symbol }) => tokenAmounts[symbol]),
      true
    );

    const shareOfPool = pool.poolData?.totalLocked.gt(0);

    yield put(
      LiquidityPageActions.setDepositTransactionData({
        from: fromStateData,
        to: {
          symbol: pool?.lpToken.symbol,
          value: minToMint,
        },
        share: shareOfPool,
      })
    );
  } catch (error) {
    console.log("error", error);
  }
}

export function* buildWithdrawReviewData() {
  const withdrawTokens = yield select(
    LiquidityPageSelectors.withdrawTokenAmounts
  );
  const transactionDeadline = Deadlines.Twenty;

  let tokensData: any = [];
  let total = 0;

  for (let tokenKey in withdrawTokens) {
    if (Number(withdrawTokens[tokenKey]) > 0) {
      tokensData = [
        ...tokensData,
        {
          symbol: tokenKey,
          value: parseFloat(withdrawTokens[tokenKey]),
        },
      ];
      total = total + parseFloat(withdrawTokens[tokenKey]);
    }
  }

  try {
    const gasPrices: GenericGasResponse = yield select(GlobalDomains.gasPrice);
    const { gasFast } = gasPrices;
    const deadline = formatDeadlineToNumber(transactionDeadline);

    yield put(
      LiquidityPageActions.setWithdrawReviewData({
        tokens: tokensData,
        total,
        deadline,
        gasPrice: gasFast.toString(),
      })
    );
  } catch (error) {
    console.log("error", error);
  }
}

export function* deposit() {
  const depositTokenAmounts = yield select(
    LiquidityPageDomains.depositTokenAmounts
  );
  const depositRaw = yield select(LiquidityPageDomains.depositRaw);
  const tokens = yield select(GlobalDomains.tokens);
  const pool: Pool = yield select(LiquidityPageDomains.pool);
  const tmp = {};
  for (let k in depositTokenAmounts) {
    const v = depositTokenAmounts[k];
    const num = Number(v);
    const toSend = floatToBN(num, tokens[k].decimals);
    tmp[k] = toSend;
  }
  const dataToSend: ApproveAndDepositPayload = {
    poolKey: pool.key,
    tokenAmounts: tmp,
    shouldDepositWrapped: pool.swapAddress === undefined ? false : !depositRaw,
  };
  yield put(RewardsActions.approveAndDeposit(dataToSend));
  yield put(LiquidityPageActions.setDepositTransactionData(undefined));
}

export function* withdraw(action: {
  type: string;
  payload: ApproveAndWithdrawPayload;
}) {
  const { payload } = action;
  // console.log(payload);
  yield put(RewardsActions.approveAndWithdraw(payload));
  // yield delay(0);
}

export function* setAmountForTokenToWithdraw(action: {
  type: string;
  payload: WithdrawTokenAmountChangePayload;
}) {
  // state.selectedTokenToWithdraw = action.payload.symbol;
  const amountsObj = yield select(LiquidityPageDomains.withdrawTokenAmounts);
  const amounts = { ...amountsObj };

  const { symbol, value } = action.payload;
  if (!isNaN(parseFloat(value))) {
    amounts[symbol] = value;
  } else {
    amounts[symbol] = zeroString;
  }

  const numberOfTokens = Object.keys(amounts).length;
  let tokensWithNonZeroAmount = {};
  for (let token in amounts) {
    if (amounts[token] > 0) {
      tokensWithNonZeroAmount[token] = amounts[token];
    }
  }
  const numberOfTokensWithNonZeroAmount = Object.keys(
    tokensWithNonZeroAmount
  ).length;

  if (numberOfTokensWithNonZeroAmount === 0) {
    yield put(
      LiquidityPageActions.setSelectedTokenToWithdraw({ symbol: "combo" })
    );
  } else if (numberOfTokensWithNonZeroAmount === 1) {
    yield put(
      LiquidityPageActions.setSelectedTokenToWithdraw({
        symbol: Object.keys(tokensWithNonZeroAmount)[0] as TokenSymbols,
      })
    );
  } else if (numberOfTokensWithNonZeroAmount !== numberOfTokens) {
    yield put(
      LiquidityPageActions.setSelectedTokenToWithdraw({ symbol: "mixed" })
    );
  }
  yield put(LiquidityPageActions.setTokenAmountsToWithdraw(amounts));
}

export function* setWithdrawPercentage(action: {
  type: string;
  payload: LiquidityPageState["withdrawPercentage"];
}) {
  const percentage = action.payload;
  const amountsObj = yield select(LiquidityPageDomains.withdrawTokenAmounts);
  const tokens = yield select(GlobalDomains.tokens);
  const amounts = { ...amountsObj };
  const selectedTokenToWithdraw = yield select(
    LiquidityPageDomains.selectedTokenToWithdraw
  );
  const tokensWithNonZeroAmount = {};
  for (let token in amounts) {
    if (amounts[token] > 0) {
      tokensWithNonZeroAmount[token] = amounts[token];
    }
  }

  const toLoop =
    selectedTokenToWithdraw === "combo"
      ? amounts
      : selectedTokenToWithdraw === "mixed"
      ? tokensWithNonZeroAmount
      : {
          [selectedTokenToWithdraw]: amounts[selectedTokenToWithdraw],
        };

  for (let symbol in toLoop) {
    const token: Token = tokens[symbol];
    const tokenBalance =
      BNToFloat(token.balance || BigNumber.from(0), token.decimals) || 0;
    const fraction = divide(multiply(tokenBalance, percentage), 100);
    amounts[symbol] = fraction.toString();
  }

  yield put(LiquidityPageActions.setTokenAmountsToWithdraw(amounts));
}

export function* setSelectedTokenToWithdraw(action: {
  type: string;
  payload: SelectTokenToWithdrawPayload;
}) {
  const { symbol, shouldEffectInputs } = action.payload;
  if (!shouldEffectInputs) return;
  const tokens = yield select(GlobalDomains.tokens);
  const percentage = yield select(LiquidityPageDomains.withdrawPercentage);
  const amountsObj = yield select(LiquidityPageDomains.withdrawTokenAmounts);
  const amounts = { ...amountsObj };
  const tokensWithNonZeroAmount = {};
  for (let token in amounts) {
    if (amounts[token] > 0) {
      tokensWithNonZeroAmount[token] = amounts[token];
    }
  }
  if (percentage) {
    if (symbol === "combo") {
      for (let token in amounts) {
        const tokenBalance =
          BNToFloat(
            tokens[token].balance || BigNumber.from(0),
            tokens[token].decimals
          ) || 0;
        const fraction = divide(multiply(tokenBalance, percentage), 100);
        amounts[token] = fraction.toString();
      }
    } else if (symbol === "mixed") {
      for (let token in tokensWithNonZeroAmount) {
        const tokenBalance =
          BNToFloat(
            tokens[token].balance || BigNumber.from(0),
            tokens[token].decimals
          ) || 0;
        const fraction = divide(multiply(tokenBalance, percentage), 100);
        amounts[token] = fraction.toString();
      }
    } else {
      const tokenBalance =
        BNToFloat(
          tokens[symbol].balance || BigNumber.from(0),
          tokens[symbol].decimals
        ) || 0;
      const fraction = divide(multiply(tokenBalance, percentage), 100);
      for (let token in amounts) {
        amounts[token] = zeroString;
      }
      amounts[symbol] = fraction.toString();
    }
    yield put(LiquidityPageActions.setTokenAmountsToWithdraw(amounts));
  } else {
    if (symbol === "combo") {
      for (let token in amounts) {
        amounts[token] = zeroString;
      }
    } else {
      for (let token in amounts) {
        if (token !== symbol) {
          amounts[token] = zeroString;
        }
      }
      amounts[symbol] = zeroString;
    }
    yield put(LiquidityPageActions.setTokenAmountsToWithdraw(amounts));
  }
}

export function* liquidityPageSaga() {
  yield takeLatest(
    LiquidityPageActions.buildTransactionData.type,
    buildTransactionData
  );
  yield takeLatest(
    LiquidityPageActions.buildWithdrawReviewData.type,
    buildWithdrawReviewData
  );
  yield takeLatest(LiquidityPageActions.deposit.type, deposit);
  yield takeLatest(LiquidityPageActions.withdraw.type, withdraw);
  yield takeLatest(
    LiquidityPageActions.setAmountForTokenToWithdraw.type,
    setAmountForTokenToWithdraw
  );
  yield takeLatest(
    LiquidityPageActions.setWithdrawPercentage.type,
    setWithdrawPercentage
  );
  yield takeLatest(
    LiquidityPageActions.setSelectedTokenToWithdraw.type,
    setSelectedTokenToWithdraw
  );
}
