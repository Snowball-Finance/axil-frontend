/**
 *
 * Rewards
 *
 */

import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Web3Selectors } from "../BlockChain/Web3/selectors";

import { RewardsActions, useRewardsSlice } from "./slice";

import { ContainerState } from "./types";

interface Props {
  pools: ContainerState["pools"];
}

export const Rewards: FC<Props> = ({ pools }) => {
  useRewardsSlice();
  const library = useSelector(Web3Selectors.selectLibrary);
  const account = useSelector(Web3Selectors.selectAccount);
  const dispatch = useDispatch();
  useEffect(() => {
    if (library && account) {
      dispatch(RewardsActions.getRewardPoolsData(pools));
      dispatch(RewardsActions.getMasterChefBalances());
    }
    return () => {};
  }, [library, account]);
  useEffect(() => {
    dispatch(RewardsActions.getMasterchefAPR());
    dispatch(RewardsActions.getSwapStats());

    return () => {};
  }, []);

  return <></>;
};
