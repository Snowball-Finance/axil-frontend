import { Pool, PoolData, UserShareData } from "app/containers/Rewards/types";
import { Token } from "app/containers/Swap/types";

/* --- STATE --- */
export interface RewardsPageState {
  pools: Pool[] | undefined;
  pool: Pool | undefined;
  poolTokens: Token[] | undefined;
  poolData: PoolData | undefined;
  userShareData: UserShareData | undefined;
  depositValue: string;
}

export interface PoolCardItemProps {
  poolKey: string;
}

export interface TokenImageProps {
  poolKey: string;
}

export interface PoolDataProps {
  poolKey: string;
}

export interface ActionButtonProps {
  poolKey: string;
}

export enum PoolsRouteIndex {
  AXIAL_AS4D_ROUTE = "as4d",
  AXIAL_AC4D_ROUTE = "ac4d",
  AXIAL_AM3D_ROUTE = "am3d",
  AXIAL_AA3D_ROUTE = "aa3d",
  AXIAL_JLP_ROUTE = "jlp",
  USDC_AM3D_ROUTE = "usdc-am3d",
}

export type ContainerState = RewardsPageState;