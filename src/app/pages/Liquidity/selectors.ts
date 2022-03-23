import { createSelector } from "@reduxjs/toolkit";

import { Zero } from "app/containers/Rewards/constants";
import { RewardsDomains } from "app/containers/Rewards/selectors";
import { Pool, PoolTypes } from "app/containers/Rewards/types";
import { RootState } from "store/types";
import { initialState } from "./slice";

export const LiquidityPageDomains = {
  liquidityPage: (state: RootState) => state.liquidityPage || initialState,
  pools: (state: RootState) => state.liquidityPage?.pools || initialState.pools,
  pool: (state: RootState) => state.liquidityPage?.pool || initialState.pool,
  poolTokens: (state: RootState) =>
    state.liquidityPage?.poolTokens || initialState.poolTokens,
  poolData: (state: RootState) =>
    state.liquidityPage?.poolData || initialState.poolData,
  userShareData: (state: RootState) =>
    state.liquidityPage?.userShareData || initialState.userShareData,
  depositTokenAmounts: (state: RootState) =>
    state.liquidityPage?.depositTokenAmounts ||
    initialState.depositTokenAmounts,
};

export const LiquidityPageSelectors = {
  selectliquidityPage: createSelector(
    LiquidityPageDomains.liquidityPage,
    (liquidityPageState) => liquidityPageState
  ),
  liquidityPools: createSelector(RewardsDomains.pools, (pools) => {
    const poolsData: Pool[] = [];
    for (let key in pools) {
      if (pools[key].poolType !== PoolTypes.LP) {
        poolsData.push(pools[key]);
      }
    }

    return poolsData.sort((a, b) => {
      if (
        (a.userShareData?.usdBalance || Zero).gt(Zero) ||
        (b.userShareData?.usdBalance || Zero).gt(Zero)
      ) {
        return (a.userShareData?.usdBalance || Zero).gt(
          b.userShareData?.usdBalance || Zero
        )
          ? -1
          : 1;
      } else {
        return (a.poolData?.reserve || Zero).gt(b.poolData?.reserve || Zero)
          ? -1
          : 1;
      }
    });
  }),
  selectedPool: createSelector(LiquidityPageDomains.pool, (pool) => pool),
  liquidityPool: (key: string) =>
    createSelector(RewardsDomains.pools, (pools) => pools[key]),
  liquidityPoolTokens: (key: string) =>
    createSelector(RewardsDomains.pools, (pools) => {
      if (pools[key]) {
        return pools[key].underlyingPoolTokens || pools[key].poolTokens;
      }
      return [];
    }),

  liquidityDepositTokenAmounts: createSelector(
    LiquidityPageDomains.depositTokenAmounts,
    (depositTokenAmounts) => depositTokenAmounts
  ),
  liquidityDepositTokenAmount: (key: string) =>
    createSelector(
      LiquidityPageDomains.depositTokenAmounts,
      (depositTokenAmounts) => depositTokenAmounts[key]
    ),
};
