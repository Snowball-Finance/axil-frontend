export const IS_DEV = process.env.NODE_ENV !== "production";

export const env = {
  ANALYTICS_ENDPOINT: process.env.REACT_APP_ANALYTICS_ENDPOINT,
  ANALYTICS_SITE_ID: process.env.REACT_APP_ANALYTICS_SITE_ID,
  APPNAME: process.env.REACT_APP_APPNAME,
  APIADDR: process.env.REACT_APP_APIADDR,
  DEVAPIADDR: process.env.REACT_APP_DEVAPIADDR,
BASE_URL: process.env.REACT_APP_BASE_URL,
  IPFS_API_URL: process.env.REACT_APP_IPFS_API_URL,
  LOCALNODE: process.env.REACT_APP_LOCALNODE,
  NETWORK: process.env.REACT_APP_NETWORK,
  PRIVATENODE: process.env.REACT_APP_PRIVATENODE,
  MAIN_TOKEN_ADDRESS: process.env.REACT_APP_MAIN_TOKEN_ADDRESS,
  MAIN_TOKEN_NAME: process.env.REACT_APP_MAIN_TOKEN_NAME,
  MAIN_TOKEN_KEY_FOR_COIN_GECKO:
    process.env.REACT_APP_MAIN_TOKEN_KEY_FOR_COIN_GECKO,
  MINIMUM_TOKEN_FOR_VOTING: process.env.REACT_APP_MINIMUM_TOKEN_FOR_VOTING,
  MINIMUM_VOTING_PERIOD: process.env.REACT_APP_MINIMUM_VOTING_PERIOD,
  MAXIMUM_VOTING_PERIOD: process.env.REACT_APP_MAXIMUM_VOTING_PERIOD,
  MINIMUM_VOTING_PERIOD_UNIT: process.env.REACT_APP_MINIMUM_VOTING_PERIOD_UNIT,
  GOVERNANCE_INFO_LINK: process.env.REACT_APP_GOVERNANCE_INFO_LINK,
  GOVERNANCE_TOKEN_NAME: process.env.REACT_APP_GOVERNANCE_TOKEN_NAME,
  ACCRUING_TOKEN_NAME: process.env.REACT_APP_ACCRUING_TOKEN_NAME,
  ACCRUING_TOKEN_ADDRESS: process.env.REACT_APP_ACCRUING_TOKEN_ADDRESS,
  GOVERNANCE_TOKEN_CONTRACT_ADDRESS:
    process.env.REACT_APP_GOVERNANCE_TOKEN_CONTRACT_ADDRESS,
  FEE_DISTRIBUTOR_CONTRACT_ADDRESS:
    process.env.REACT_APP_FEE_DISTRIBUTOR_CONTRACT_ADDRESS,
  VOTING_CONTRACT_ADDRESS: process.env.REACT_APP_VOTING_CONTRACT_ADDRESS,
  PROPOSALS_OFFSET_NUMBER: process.env.REACT_APP_PROPOSALS_OFFSET_NUMBER,
  GOVERNANCE_TOKEN_LOGO_ADDRESS:
    process.env.REACT_APP_GOVERNANCE_TOKEN_LOGO_ADDRESS,
  GAUGE_PROXY_ADDRESS: process.env.REACT_APP_GAUGE_PROXY_ADDRESS,
};
