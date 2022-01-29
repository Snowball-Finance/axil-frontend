import { POOLS_MAP, SWAP_TYPES, TRANSACTION_TYPES } from "../constants"
import { AppState } from "../store"
import { BigNumber } from "@ethersproject/bignumber"
import { Bridge } from "../../types/ethers-contracts/Bridge"
import { Erc20 } from "../../types/ethers-contracts/Erc20"
import { GasPrices } from "../store/module/user"
import { MetaSwapDeposit } from "../../types/ethers-contracts/MetaSwapDeposit"
import { SwapFlashLoan } from "../../types/ethers-contracts/SwapFlashLoan"
import { SwapFlashLoanNoWithdrawFee } from "../../types/ethers-contracts/SwapFlashLoanNoWithdrawFee"
import { SwapGuarded } from "../../types/ethers-contracts/SwapGuarded"
import checkAndApproveTokenForTrade from "../libs/checkAndApproveTokenForTrade"
import { formatDeadlineToNumber } from "../libs"
import { parseUnits } from "@ethersproject/units"
import { subtractSlippage } from "../libs/slippage"
import { updateLastTransactionTimes } from "../store/application"
import { useActiveWeb3React } from "."
import { useAllContracts } from "./useContract"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { utils } from "ethers"

type Contracts = {
  swapContract:
    | SwapFlashLoan
    | SwapFlashLoanNoWithdrawFee
    | SwapGuarded
    | MetaSwapDeposit
    | null
  bridgeContract: Bridge | null
}
type SwapSide = {
  amount: BigNumber
  symbol: string
  poolName: string
  tokenIndex: number
}
type FormState = {
  from: SwapSide
  to: SwapSide & { amountMediumSynth: BigNumber }
  swapType: Exclude<SWAP_TYPES, SWAP_TYPES.INVALID>
}
type ApproveAndSwapStateArgument = FormState & Contracts

export function useApproveAndSwap(): (
  state: ApproveAndSwapStateArgument,
) => Promise<void> {
  const dispatch = useDispatch()
  const tokenContracts = useAllContracts()
  const { account, chainId } = useActiveWeb3React()
  const { gasStandard, gasFast, gasInstant } = useSelector(
    (state: AppState) => state.application,
  )
  const {
    slippageCustom,
    slippageSelected,
    gasPriceSelected,
    gasCustom,
    transactionDeadlineCustom,
    transactionDeadlineSelected,
    infiniteApproval,
  } = useSelector((state: AppState) => state.user)
  return async function approveAndSwap(
    state: ApproveAndSwapStateArgument,
  ): Promise<void> {
    try {
      if (!account) throw new Error("Wallet must be connected")
      if (state.swapType === SWAP_TYPES.DIRECT && !state.swapContract)
        throw new Error("Swap contract is not loaded")
      if (state.swapType !== SWAP_TYPES.DIRECT && !state.bridgeContract)
        throw new Error("Bridge contract is not loaded")
      if (chainId === undefined) throw new Error("Unknown chain")
      // For each token being deposited, check the allowance and approve it if necessary
      const tokenContract = tokenContracts?.[state.from.symbol] as Erc20
      let gasPrice
      if (gasPriceSelected === GasPrices.Custom &&gasCustom?.valueSafe) {
        gasPrice = gasCustom?.valueSafe
      } else if (gasPriceSelected === GasPrices.Fast) {
        gasPrice = gasFast
      } else if (gasPriceSelected === GasPrices.Instant) {
        gasPrice = gasInstant
      } else {
        gasPrice = gasStandard
      }
      gasPrice = parseUnits(gasPrice?String(gasPrice):"45", 9)
      if (tokenContract == null) return
      let addressToApprove = ""
      if (state.swapType === SWAP_TYPES.DIRECT) {
        addressToApprove = state.swapContract?.address as string
      } else {
        addressToApprove = state.bridgeContract?.address as string
      }
      await checkAndApproveTokenForTrade(
        tokenContract,
        addressToApprove,
        account,
        state.from.amount,
        infiniteApproval,
        gasPrice,
        {
          onTransactionError: () => {
            throw new Error("Your transaction could not be completed")
          },
        },
      )
      const txnArgs = {}
      let swapTransaction
      if (state.swapType === SWAP_TYPES.TOKEN_TO_TOKEN) {
        const originPool = POOLS_MAP[state.from.poolName]
        const destinationPool = POOLS_MAP[state.to.poolName]
        const args = [
          [
            originPool.addresses[chainId],
            destinationPool.addresses[chainId],
          ] as [string, string],
          state.from.tokenIndex,
          state.to.tokenIndex,
          state.from.amount,
          subtractSlippage(
            state.to.amountMediumSynth,
            slippageSelected,
            slippageCustom,
          ), // subtract slippage from minSynth
          txnArgs,
        ] as const
        console.debug("swap - tokenToToken", args)
        swapTransaction = await (state.bridgeContract as Bridge).tokenToToken(
          ...args,
        )
      } else if (state.swapType === SWAP_TYPES.SYNTH_TO_TOKEN) {
        const destinationPool = POOLS_MAP[state.to.poolName]
        const args = [
          destinationPool.addresses[chainId],
          utils.formatBytes32String(state.from.symbol),
          state.to.tokenIndex,
          state.from.amount,
          subtractSlippage(
            state.to.amountMediumSynth,
            slippageSelected,
            slippageCustom,
          ), // subtract slippage from minSynth
          txnArgs,
        ] as const
        console.debug("swap - synthToToken", args)
        swapTransaction = await (state.bridgeContract as Bridge).synthToToken(
          ...args,
        )
      } else if (state.swapType === SWAP_TYPES.TOKEN_TO_SYNTH) {
        const originPool = POOLS_MAP[state.from.poolName]
        const args = [
          originPool.addresses[chainId],
          state.from.tokenIndex,
          utils.formatBytes32String(state.to.symbol),
          state.from.amount,
          subtractSlippage(state.to.amount, slippageSelected, slippageCustom),
          txnArgs,
        ] as const
        console.debug("swap - tokenToSynth", args)
        swapTransaction = await (state.bridgeContract as Bridge).tokenToSynth(
          ...args,
        )
      } else if (state.swapType === SWAP_TYPES.DIRECT) {
        const deadline = formatDeadlineToNumber(
          transactionDeadlineSelected,
          transactionDeadlineCustom,
        )

        const args = [
          state.from.tokenIndex,
          state.to.tokenIndex,
          state.from.amount,
          subtractSlippage(state.to.amount, slippageSelected, slippageCustom),
          Math.round(new Date().getTime() / 1000 + 60 * deadline),
          txnArgs,
        ] as const
        console.debug("swap - direct", args)
        swapTransaction = await (state.swapContract as NonNullable<
          typeof state.swapContract // we already check for nonnull above
        >).swap(...args)
      } else {
        throw new Error("Invalid Swap Type, or contract not loaded")
      }

      await swapTransaction?.wait()
      dispatch(
        updateLastTransactionTimes({
          [TRANSACTION_TYPES.SWAP]: Date.now(),
        }),
      )
      return Promise.resolve()
    } catch (e) {
      console.error(e)
    }
  }
}
