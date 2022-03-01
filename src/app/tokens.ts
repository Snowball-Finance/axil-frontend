import ERC20_ABI from "abi/erc20.json";
import { Token, TokenSymbols } from "./containers/Swap/types";
import axialLogo from "assets/icons/logo_icon.svg"; // this needs a smaller icon logo(24)
import daiLogo from "assets/icons/dai.svg";
import fraxLogo from "assets/icons/frax.svg";
import tsdLogo from "assets/icons/tsd.svg";
import mimLogo from "assets/icons/mim.svg";
import tusdLogo from "assets/icons/tusd.svg";
import usdcLogo from "assets/icons/usdc.svg";
import usdtLogo from "assets/icons/usdt.svg";
import avaiLogo from "assets/icons/avai.svg";

export const tokens: { [K in TokenSymbols]: Token } = {
  "USDT.e": {
    ABI: ERC20_ABI,
    address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    symbol: "USDT.e",
    name: "Tether",
    geckoId: "tether",
    logo: usdtLogo,
    decimals: 6,
    masterchefId: 0,
    isSynthetic: false,
    isLPToken: false,
  },
  usdcAM3DUSD: {
    address: "0xA57E0D32Aa27D3b1D5AFf6a8A786C6A4DADb818F",
    ABI: ERC20_ABI,
    decimals: 18,
    symbol: "usdcAM3DUSD",
    name: "Axial USDC/AM3D",
    logo: axialLogo,
    geckoId: "usdcam3dusd",
    masterchefId: 5,
    isSynthetic: false,
    isLPToken: true,
  },
  ac4dUSD: {
    address: "0x4da067E13974A4d32D342d86fBBbE4fb0f95f382",
    ABI: ERC20_ABI,
    decimals: 18,
    symbol: "ac4dUSD",
    name: "AC4D TSD/MIM/FRAX/DAI.e",
    logo: axialLogo,
    geckoId: "ac4dusd",
    masterchefId: 1,
    isSynthetic: false,
    isLPToken: true,
  },
  aa3dUSD: {
    address: "0xaD556e7dc377d9089C6564f9E8d275f5EE4da22d",
    ABI: ERC20_ABI,
    decimals: 18,
    symbol: "aa3dUSD",
    name: "AA3D AVAI/MIM/USDC.e",
    logo: axialLogo,
    geckoId: "aa3dusd",
    masterchefId: 4,
    isSynthetic: false,
    isLPToken: true,
  },

  am3dUSD: {
    address: "0xc161E4B11FaF62584EFCD2100cCB461A2DdE64D1",
    ABI: ERC20_ABI,
    decimals: 18,
    symbol: "am3dUSD",
    name: "AM3D MIM/USDC.e/DAI.e",
    logo: axialLogo,
    geckoId: "am3dusd",
    masterchefId: 3,
    isSynthetic: false,
    isLPToken: true,
  },
  as4dUSD: {
    ABI: ERC20_ABI,
    address: "0x3A7387f8BA3ebFFa4A0ECcB1733e940CE2275D3f",
    decimals: 18,
    symbol: "as4dUSD",
    name: "AS4D DAI.e/USDC.e/USDT.e/TUSD",
    geckoId: "as4dusd",
    masterchefId: 0,
    isSynthetic: false,
    isLPToken: true,
    logo: axialLogo,
  },
  JLP: {
    ABI: ERC20_ABI,
    address: "0x5305A6c4DA88391F4A9045bF2ED57F4BF0cF4f62",
    decimals: 18,
    symbol: "JLP",
    name: "JLP",
    geckoId: "jlpavaxaxial",
    logo: axialLogo,
    masterchefId: 2,
    isSynthetic: false,
    isLPToken: true,
  },
  FRAX: {
    ABI: ERC20_ABI,
    address: "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
    decimals: 18,
    symbol: "FRAX",
    name: "Frax",
    logo: fraxLogo,
    geckoId: "frax",
    masterchefId: 0,
    isSynthetic: false,
    isLPToken: false,
  },
  FXS: {
    ABI: ERC20_ABI,
    address: "0x214DB107654fF987AD859F34125307783fC8e387",
    decimals: 18,
    symbol: "FXS",
    name: "Frax Share",
    logo: axialLogo,
    geckoId: "frax-share",
    isLPToken: false,
    isSynthetic: false,
    masterchefId: 0,
  },
  "DAI.e": {
    ABI: ERC20_ABI,
    address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    decimals: 18,
    symbol: "DAI.e",
    logo: daiLogo,
    geckoId: "dai",
    name: "Dai",
    masterchefId: 0,
    isSynthetic: false,
    isLPToken: false,
  },
  AVAI: {
    ABI: ERC20_ABI,
    address: "0x346A59146b9b4a77100D369a3d18E8007A9F46a6",
    decimals: 18,
    symbol: "AVAI",
    logo: avaiLogo,
    geckoId: "orca-avai",
    name: "Orca AVAI",
    masterchefId: 0,
    isSynthetic: false,
    isLPToken: false,
  },
  TSD: {
    ABI: ERC20_ABI,
    address: "0x4fbf0429599460D327BD5F55625E30E4fC066095",
    decimals: 18,
    symbol: "TSD",
    name: "Teddy Dollar",
    logo: tsdLogo,
    geckoId: "teddy-dollar",
    masterchefId: 0,
    isSynthetic: false,
    isLPToken: false,
  },
  USDC: {
    ABI: ERC20_ABI,
    address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    decimals: 6,
    symbol: "USDC",
    name: "Native USDC",
    logo: usdcLogo,
    geckoId: "usd-coin",
    masterchefId: 0,
    isSynthetic: false,
    isLPToken: false,
  },
  MIM: {
    ABI: ERC20_ABI,
    address: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    decimals: 18,
    symbol: "MIM",
    name: "Magic Internet Money",
    logo: mimLogo,
    geckoId: "magic-internet-money",
    masterchefId: 0,
    isSynthetic: false,
    isLPToken: false,
  },
  TEDDY: {
    ABI: ERC20_ABI,
    address: "0x094bd7B2D99711A1486FB94d4395801C6d0fdDcC",
    decimals: 18,
    symbol: "TEDDY",
    name: "Teddy",
    logo: axialLogo,
    geckoId: "teddy",
    isLPToken: false,
    isSynthetic: false,
    masterchefId: 0,
  },
  WAVAX: {
    ABI: ERC20_ABI,
    address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    decimals: 18,
    symbol: "WAVAX",
    name: "Wrapped AVAX",
    logo: axialLogo,
    geckoId: "avalanche-2",
    isLPToken: false,
    isSynthetic: false,
    masterchefId: 0,
  },
  TUSD: {
    ABI: ERC20_ABI,
    address: "0x1C20E891Bab6b1727d14Da358FAe2984Ed9B59EB",
    decimals: 18,
    symbol: "TUSD",
    name: "TUSD",
    logo: tusdLogo,
    geckoId: "true-usd",
    masterchefId: 0,
    isSynthetic: false,
    isLPToken: false,
  },
  "USDC.e": {
    ABI: ERC20_ABI,
    address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    decimals: 6,
    symbol: "USDC.e",
    name: "USDC.e",
    logo: usdcLogo,
    geckoId: "usd-coin",
    isLPToken: false,
    isSynthetic: false,
    masterchefId: 0,
  },
  ORCA: {
    ABI: ERC20_ABI,
    address: "0x8B1d98A91F853218ddbb066F20b8c63E782e2430",
    decimals: 18,
    symbol: "ORCA",
    name: "Orca DAO",
    logo: axialLogo,
    geckoId: "orcadao",
    masterchefId: 0,
    isSynthetic: false,
    isLPToken: false,
  },
};
export const extraRewardTokens = [
  tokens.TEDDY,
  tokens.FXS,
  tokens.WAVAX,
  tokens.ORCA,
];
