import ERC20_ABI from "abi/erc20.json";
import { Token, TokenSymbols } from "./containers/Swap/types";
import axialLogo from "assets/icons/logo_icon.svg"; // this needs a smaller icon logo(24)
import { networkName } from "utils/network";
import { fujiTokens } from "./fujiTokens";
import wrappedBTCIcon from "assets/icons/wrappedbitcoin.png";
import { iconSrcWithAddress } from "utils/iconSrcByAddress";

//symbol should be identical to key of token
export const tokens =
  networkName === "Fuji"
    ? fujiTokens
    : ({
        [TokenSymbols.DAI]: {
          ABI: ERC20_ABI,
          address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
          decimals: 18,
          symbol: TokenSymbols.DAI,
          logo: iconSrcWithAddress(
            "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70"
          ),
          geckoId: "dai",
          name: "Dai Stablecoin",
          isLPToken: false,
        },
        [TokenSymbols.USDTe]: {
          ABI: ERC20_ABI,
          address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
          symbol: TokenSymbols.USDTe,
          name: "Tether USD",
          geckoId: "tether",
          logo: iconSrcWithAddress(
            "0xc7198437980c041c805A1EDcbA50c1Ce5db95118"
          ),
          decimals: 6,
          isLPToken: false,
        },
        [TokenSymbols.USDt]: {
          ABI: ERC20_ABI,
          address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
          symbol: TokenSymbols.USDt,
          name: "TetherToken",
          geckoId: "tether",
          logo: "https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707", //iconSrcWithAddress(tokenAddress(TokenSymbols.USDt)),
          decimals: 6,
          isLPToken: false,
        },
        [TokenSymbols.USDCe]: {
          ABI: ERC20_ABI,
          address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
          decimals: 6,
          symbol: TokenSymbols.USDCe,
          name: "Bridged USD Coin",
          logo: iconSrcWithAddress(
            "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664"
          ),
          geckoId: "usd-coin",
          isLPToken: false,
        },
        [TokenSymbols.USDC]: {
          ABI: ERC20_ABI,
          address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
          decimals: 6,
          symbol: TokenSymbols.USDC,
          name: "USD Coin",
          logo: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389", // iconSrcWithAddress(tokenAddress(TokenSymbols.USDC)),
          geckoId: "usd-coin",
          isLPToken: false,
        },
        [TokenSymbols.MIM]: {
          ABI: ERC20_ABI,
          address: "0x130966628846BFd36ff31a822705796e8cb8C18D",
          decimals: 18,
          symbol: TokenSymbols.MIM,
          name: "Magic Internet Money",
          logo: iconSrcWithAddress(
            "0x130966628846BFd36ff31a822705796e8cb8C18D"
          ),
          geckoId: "magic-internet-money",
          isLPToken: false,
        },
        [TokenSymbols.YUSD]: {
          ABI: ERC20_ABI,
          address: "0x111111111111ed1D73f860F57b2798b683f2d325",
          decimals: 18,
          symbol: TokenSymbols.YUSD,
          name: "YUSD Stablecoin",
          logo: "https://assets.coingecko.com/coins/images/25024/small/1_oJ0F2Zf6CuAhLP0zOboo6w.png?1649837252", // iconSrcWithAddress(tokenAddress(TokenSymbols.YUSD)),
          geckoId: "yusd-stablecoin",
          isLPToken: false,
        },
        [TokenSymbols.TUSD]: {
          ABI: ERC20_ABI,
          address: "0x1C20E891Bab6b1727d14Da358FAe2984Ed9B59EB",
          decimals: 18,
          symbol: TokenSymbols.TUSD,
          name: "TrueUSD",
          logo: iconSrcWithAddress(
            "0x1C20E891Bab6b1727d14Da358FAe2984Ed9B59EB"
          ),
          geckoId: "true-usd",
          isLPToken: false,
        },
        [TokenSymbols.TSD]: {
          ABI: ERC20_ABI,
          address: "0x4fbf0429599460D327BD5F55625E30E4fC066095",
          decimals: 18,
          symbol: TokenSymbols.TSD,
          name: "TSD Stablecoin",
          logo: iconSrcWithAddress(
            "0x4fbf0429599460D327BD5F55625E30E4fC066095"
          ),
          geckoId: "teddy-dollar",
          isLPToken: false,
        },
        [TokenSymbols.FRAX]: {
          ABI: ERC20_ABI,
          address: "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
          decimals: 18,
          symbol: TokenSymbols.FRAX,
          name: "Frax",
          logo: iconSrcWithAddress(
            "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64"
          ),
          geckoId: "frax",
          isLPToken: false,
        },
        [TokenSymbols.SCALES]: {
          ABI: ERC20_ABI,
          address: "0x556FB44205549c115e83A58d91522B14340Fb8d3",
          decimals: 18,
          symbol: TokenSymbols.SCALES,
          name: "Axial Dai.e+USDT.e+USDC.e+USDC",
          logo: axialLogo,
          geckoId: "pool4tokens",
          isLPToken: true,
        },
        [TokenSymbols.HERO]: {
          ABI: ERC20_ABI,
          address: "0x73fA690aE97CdE1426d144E5f7406895fEa715E4",
          decimals: 18,
          symbol: TokenSymbols.HERO,
          name: "Axial USDC+USDT+MIM+YUSD",
          logo: axialLogo,
          geckoId: "pool4tokens",
          isLPToken: true,
        },
        [TokenSymbols.AS4D]: {
          ABI: ERC20_ABI,
          address: "0x3A7387f8BA3ebFFa4A0ECcB1733e940CE2275D3f",
          decimals: 18,
          symbol: TokenSymbols.AS4D,
          name: "Axial TUSD+USDC.e+DAI.e+USDT.e",
          logo: axialLogo,
          geckoId: "pool4tokens",
          isLPToken: true,
        },
        [TokenSymbols.AC4D]: {
          ABI: ERC20_ABI,
          address: "0x4da067E13974A4d32D342d86fBBbE4fb0f95f382",
          decimals: 18,
          symbol: TokenSymbols.AC4D,
          name: "Axial DAI.e+MIM+TSD+FRAX",
          logo: axialLogo,
          geckoId: "pool4tokens",
          isLPToken: true,
        },
        [TokenSymbols.AM3D]: {
          ABI: ERC20_ABI,
          address: "0xc161E4B11FaF62584EFCD2100cCB461A2DdE64D1",
          decimals: 18,
          symbol: TokenSymbols.AM3D,
          name: "Axial DAI.e+USDC.e+MIM",
          logo: axialLogo,
          geckoId: "pool3tokens",
          isLPToken: true,
        },
        [TokenSymbols.AXIAL]: {
          ABI: ERC20_ABI,
          address: "0xcF8419A615c57511807236751c0AF38Db4ba3351",
          decimals: 18,
          symbol: TokenSymbols.AXIAL,
          name: "Axial Token",
          logo: axialLogo,
          geckoId: "axial-token",
          isLPToken: false,
          blockSwap: true,
        },
        [TokenSymbols.WBTCe]: {
          ABI: ERC20_ABI,
          address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
          decimals: 8,
          symbol: TokenSymbols.WBTCe,
          name: "Wrapped Bitcoin",
          logo: wrappedBTCIcon,
          geckoId: "wrapped-bitcoin",
          isLPToken: false,
        },
        [TokenSymbols.BTCb]: {
          ABI: ERC20_ABI,
          address: "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
          decimals: 8,
          symbol: TokenSymbols.BTCb,
          name: "BTC.b",
          logo: "https://assets.coingecko.com/coins/images/26115/small/btcb.png?1655921693",
          geckoId: "wrapped-bitcoin",
          isLPToken: false,
        },
        [TokenSymbols.RENBTC]: {
          ABI: ERC20_ABI,
          address: "0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",
          decimals: 8,
          symbol: TokenSymbols.RENBTC,
          name: "renBTC",
          logo: "https://cryptorank-images.s3.eu-central-1.amazonaws.com/coins/renbtc1595433339629.png",
          geckoId: "wrapped-bitcoin",
          isLPToken: false,
        },
        [TokenSymbols.PERSEUS]: {
          ABI: ERC20_ABI,
          address: "0x993399efcfB1E13Baf0E7a03d37d61697030633C",
          decimals: 18,
          symbol: TokenSymbols.PERSEUS,
          name: "Axial WBTC.e+BTC.b",
          logo: axialLogo,
          geckoId: "wrapped-bitcoin",
          isLPToken: true,
        },
        [TokenSymbols.HERCULES]: {
          ABI: ERC20_ABI,
          address: "0x7aaFcDBF79e4434127929493324E9Ce91d80E4bB",
          decimals: 18,
          symbol: TokenSymbols.HERCULES,
          name: "Axial renBTC+wBTC.e",
          logo: axialLogo,
          geckoId: "wrapped-bitcoin",
          isLPToken: true,
        },
        [TokenSymbols.PGL]: {
          ABI: ERC20_ABI,
          address: "0x53d4bF164c53547b4278A0352C292162C154AfE5",
          decimals: 18,
          symbol: TokenSymbols.PGL,
          name: "Pangolin Liquidity (PGL)",
          logo: axialLogo,
          geckoId: "pangolin-liquidity",
          isLPToken: true,
        },
        [TokenSymbols.WAVAX]: {
          ABI: ERC20_ABI,
          address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
          decimals: 18,
          symbol: TokenSymbols.WAVAX,
          name: "Wrapped AVAX",
          logo: iconSrcWithAddress(
            "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"
          ),
          geckoId: "avax",
          blockSwap: true,
        },
      } as { [K in TokenSymbols]: Token });
