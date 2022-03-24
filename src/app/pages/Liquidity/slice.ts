import { ContainerState } from "./types";
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { liquidityPageSaga } from "./saga";
import { PayloadAction } from "@reduxjs/toolkit";
import { TokenSymbols } from "app/containers/Swap/types";
import { ApproveAndWithdrawPayload, Pool } from "app/containers/Rewards/types";
import { zeroString } from "./constants";

// The initial state of the LiquidityPage container
export const initialState: ContainerState = {
  pools: undefined,
  pool: undefined,
  poolTokens: undefined,
  poolData: undefined,
  userShareData: undefined,
  depositTokenAmounts: {},
  withdrawTokenAmounts: {},
  withdrawPercentage: 0,
  selectedTokenToWithdraw: "combo",
};

const liquidityPageSlice = createSlice({
  name: "liquidityPage",
  initialState,
  reducers: {
    setSelectedPool(state, action: PayloadAction<Pool | undefined>) {
      state.pool = action.payload;
      if (action.payload) {
        const tmp = {};
        const tokens = action.payload.poolTokens;
        for (let k in tokens) {
          const token = tokens[k];
          tmp[token.symbol] = zeroString;
        }
        state.depositTokenAmounts = tmp;
        state.withdrawTokenAmounts = tmp;
      }
    },
    setLiquidityDepositTokenAmount(
      state,
      action: PayloadAction<{ symbol: TokenSymbols; value: string }>
    ) {
      let v = zeroString;
      const { symbol } = action.payload;
      if (!isNaN(parseFloat(action.payload.value))) {
        v = action.payload.value;
      }
      if (action.payload.value === "") {
        v = zeroString;
      }
      const valueToApply = v;
      const allValues = { ...state.depositTokenAmounts };
      allValues[symbol] = valueToApply;
      state.depositTokenAmounts = allValues;
    },
    deposit() {},
    withdraw(state, action: PayloadAction<ApproveAndWithdrawPayload>) {},
    setWithdrawPercentage(state, action: PayloadAction<number>) {
      state.withdrawPercentage = action.payload;
    },
    setSelectedTokenToWithdraw(
      state,
      action: PayloadAction<"combo" | TokenSymbols>
    ) {
      state.selectedTokenToWithdraw = action.payload;
    },
    setAmountForTokenToWithdraw(
      state,
      action: PayloadAction<{ symbol: TokenSymbols; value: string }>
    ) {
      state.withdrawPercentage = 0;
      state.selectedTokenToWithdraw = action.payload.symbol;
      const amounts = { ...state.withdrawTokenAmounts };
      const { symbol, value } = action.payload;
      if (!isNaN(parseFloat(value))) {
        amounts[symbol] = value;
      } else {
        amounts[symbol] = zeroString;
      }
      state.withdrawTokenAmounts = amounts;
    },
  },
});

export const {
  actions: LiquidityPageActions,
  reducer: LiquidityPageReducer,
  name: sliceKey,
} = liquidityPageSlice;

export const useLiquidityPageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: LiquidityPageReducer });
  useInjectSaga({ key: sliceKey, saga: liquidityPageSaga });
  return { LiquidityPageActions };
};