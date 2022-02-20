/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AlchemixStakingPoolsInterface extends utils.Interface {
  contractName: "AlchemixStakingPools";
  functions: {
    "acceptGovernance()": FunctionFragment;
    "claim(uint256)": FunctionFragment;
    "createPool(address)": FunctionFragment;
    "deposit(uint256,uint256)": FunctionFragment;
    "exit(uint256)": FunctionFragment;
    "getPoolRewardRate(uint256)": FunctionFragment;
    "getPoolRewardWeight(uint256)": FunctionFragment;
    "getPoolToken(uint256)": FunctionFragment;
    "getPoolTotalDeposited(uint256)": FunctionFragment;
    "getStakeTotalDeposited(address,uint256)": FunctionFragment;
    "getStakeTotalUnclaimed(address,uint256)": FunctionFragment;
    "governance()": FunctionFragment;
    "pendingGovernance()": FunctionFragment;
    "poolCount()": FunctionFragment;
    "reward()": FunctionFragment;
    "rewardRate()": FunctionFragment;
    "setPendingGovernance(address)": FunctionFragment;
    "setRewardRate(uint256)": FunctionFragment;
    "setRewardWeights(uint256[])": FunctionFragment;
    "tokenPoolIds(address)": FunctionFragment;
    "totalRewardWeight()": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "createPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "exit", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getPoolRewardRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolRewardWeight",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolTotalDeposited",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeTotalDeposited",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeTotalUnclaimed",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "poolCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "reward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardWeights",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPoolIds",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalRewardWeight",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolRewardRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolRewardWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolTotalDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeTotalDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeTotalUnclaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPendingGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenPoolIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRewardWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "GovernanceUpdated(address)": EventFragment;
    "PendingGovernanceUpdated(address)": EventFragment;
    "PoolCreated(uint256,address)": EventFragment;
    "PoolRewardWeightUpdated(uint256,uint256)": EventFragment;
    "RewardRateUpdated(uint256)": EventFragment;
    "TokensClaimed(address,uint256,uint256)": EventFragment;
    "TokensDeposited(address,uint256,uint256)": EventFragment;
    "TokensWithdrawn(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GovernanceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PendingGovernanceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolRewardWeightUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardRateUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensWithdrawn"): EventFragment;
}

export type GovernanceUpdatedEvent = TypedEvent<
  [string],
  { governance: string }
>;

export type GovernanceUpdatedEventFilter =
  TypedEventFilter<GovernanceUpdatedEvent>;

export type PendingGovernanceUpdatedEvent = TypedEvent<
  [string],
  { pendingGovernance: string }
>;

export type PendingGovernanceUpdatedEventFilter =
  TypedEventFilter<PendingGovernanceUpdatedEvent>;

export type PoolCreatedEvent = TypedEvent<
  [BigNumber, string],
  { poolId: BigNumber; token: string }
>;

export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;

export type PoolRewardWeightUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { poolId: BigNumber; rewardWeight: BigNumber }
>;

export type PoolRewardWeightUpdatedEventFilter =
  TypedEventFilter<PoolRewardWeightUpdatedEvent>;

export type RewardRateUpdatedEvent = TypedEvent<
  [BigNumber],
  { rewardRate: BigNumber }
>;

export type RewardRateUpdatedEventFilter =
  TypedEventFilter<RewardRateUpdatedEvent>;

export type TokensClaimedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; poolId: BigNumber; amount: BigNumber }
>;

export type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;

export type TokensDepositedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; poolId: BigNumber; amount: BigNumber }
>;

export type TokensDepositedEventFilter = TypedEventFilter<TokensDepositedEvent>;

export type TokensWithdrawnEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; poolId: BigNumber; amount: BigNumber }
>;

export type TokensWithdrawnEventFilter = TypedEventFilter<TokensWithdrawnEvent>;

export interface AlchemixStakingPools extends BaseContract {
  contractName: "AlchemixStakingPools";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AlchemixStakingPoolsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptGovernance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createPool(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _poolId: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exit(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPoolRewardRate(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPoolRewardWeight(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPoolToken(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPoolTotalDeposited(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakeTotalDeposited(
      _account: string,
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakeTotalUnclaimed(
      _account: string,
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    pendingGovernance(overrides?: CallOverrides): Promise<[string]>;

    poolCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    reward(overrides?: CallOverrides): Promise<[string]>;

    rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    setPendingGovernance(
      _pendingGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardRate(
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardWeights(
      _rewardWeights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenPoolIds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalRewardWeight(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      _poolId: BigNumberish,
      _withdrawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptGovernance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    _poolId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createPool(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _poolId: BigNumberish,
    _depositAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exit(
    _poolId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPoolRewardRate(
    _poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPoolRewardWeight(
    _poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPoolToken(
    _poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getPoolTotalDeposited(
    _poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakeTotalDeposited(
    _account: string,
    _poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakeTotalUnclaimed(
    _account: string,
    _poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  governance(overrides?: CallOverrides): Promise<string>;

  pendingGovernance(overrides?: CallOverrides): Promise<string>;

  poolCount(overrides?: CallOverrides): Promise<BigNumber>;

  reward(overrides?: CallOverrides): Promise<string>;

  rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  setPendingGovernance(
    _pendingGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardRate(
    _rewardRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardWeights(
    _rewardWeights: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenPoolIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalRewardWeight(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    _poolId: BigNumberish,
    _withdrawAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptGovernance(overrides?: CallOverrides): Promise<void>;

    claim(_poolId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    createPool(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _poolId: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    exit(_poolId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getPoolRewardRate(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolRewardWeight(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolToken(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getPoolTotalDeposited(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakeTotalDeposited(
      _account: string,
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakeTotalUnclaimed(
      _account: string,
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<string>;

    pendingGovernance(overrides?: CallOverrides): Promise<string>;

    poolCount(overrides?: CallOverrides): Promise<BigNumber>;

    reward(overrides?: CallOverrides): Promise<string>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    setPendingGovernance(
      _pendingGovernance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardRate(
      _rewardRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardWeights(
      _rewardWeights: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    tokenPoolIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalRewardWeight(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _poolId: BigNumberish,
      _withdrawAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GovernanceUpdated(address)"(
      governance?: null
    ): GovernanceUpdatedEventFilter;
    GovernanceUpdated(governance?: null): GovernanceUpdatedEventFilter;

    "PendingGovernanceUpdated(address)"(
      pendingGovernance?: null
    ): PendingGovernanceUpdatedEventFilter;
    PendingGovernanceUpdated(
      pendingGovernance?: null
    ): PendingGovernanceUpdatedEventFilter;

    "PoolCreated(uint256,address)"(
      poolId?: BigNumberish | null,
      token?: string | null
    ): PoolCreatedEventFilter;
    PoolCreated(
      poolId?: BigNumberish | null,
      token?: string | null
    ): PoolCreatedEventFilter;

    "PoolRewardWeightUpdated(uint256,uint256)"(
      poolId?: BigNumberish | null,
      rewardWeight?: null
    ): PoolRewardWeightUpdatedEventFilter;
    PoolRewardWeightUpdated(
      poolId?: BigNumberish | null,
      rewardWeight?: null
    ): PoolRewardWeightUpdatedEventFilter;

    "RewardRateUpdated(uint256)"(
      rewardRate?: null
    ): RewardRateUpdatedEventFilter;
    RewardRateUpdated(rewardRate?: null): RewardRateUpdatedEventFilter;

    "TokensClaimed(address,uint256,uint256)"(
      user?: string | null,
      poolId?: BigNumberish | null,
      amount?: null
    ): TokensClaimedEventFilter;
    TokensClaimed(
      user?: string | null,
      poolId?: BigNumberish | null,
      amount?: null
    ): TokensClaimedEventFilter;

    "TokensDeposited(address,uint256,uint256)"(
      user?: string | null,
      poolId?: BigNumberish | null,
      amount?: null
    ): TokensDepositedEventFilter;
    TokensDeposited(
      user?: string | null,
      poolId?: BigNumberish | null,
      amount?: null
    ): TokensDepositedEventFilter;

    "TokensWithdrawn(address,uint256,uint256)"(
      user?: string | null,
      poolId?: BigNumberish | null,
      amount?: null
    ): TokensWithdrawnEventFilter;
    TokensWithdrawn(
      user?: string | null,
      poolId?: BigNumberish | null,
      amount?: null
    ): TokensWithdrawnEventFilter;
  };

  estimateGas: {
    acceptGovernance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createPool(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _poolId: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exit(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPoolRewardRate(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolRewardWeight(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolToken(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolTotalDeposited(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakeTotalDeposited(
      _account: string,
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakeTotalUnclaimed(
      _account: string,
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    pendingGovernance(overrides?: CallOverrides): Promise<BigNumber>;

    poolCount(overrides?: CallOverrides): Promise<BigNumber>;

    reward(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    setPendingGovernance(
      _pendingGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardRate(
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardWeights(
      _rewardWeights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenPoolIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalRewardWeight(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _poolId: BigNumberish,
      _withdrawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createPool(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _poolId: BigNumberish,
      _depositAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exit(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPoolRewardRate(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolRewardWeight(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolToken(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolTotalDeposited(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakeTotalDeposited(
      _account: string,
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakeTotalUnclaimed(
      _account: string,
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPendingGovernance(
      _pendingGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardRate(
      _rewardRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardWeights(
      _rewardWeights: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenPoolIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalRewardWeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _poolId: BigNumberish,
      _withdrawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}