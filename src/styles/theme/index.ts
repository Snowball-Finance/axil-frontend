import { createTheme } from "@mui/material";
import { FontFamilies } from "styles/cssVariables/cssVariables";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    h2: {
      fontSize: "26px",
      fontFamily: FontFamilies.FugazOne,
    },
    h5: {
      fontSize: "20px",
      fontFamily: FontFamilies.FugazOne,
    },
    body1: {
      fontSize: "16px",
      fontFamily: FontFamilies.IBMPlexSans,
      fontWeight: "bold",
    },
    body2: {
      fontSize: "16px",
      fontFamily: FontFamilies.IBMPlexSans,
    },
  },
  direction: "ltr",
  palette: {
    secondary: {
      main: "#d20e42",
    },
    primary: {
      main: "#d15e2c",
    },
    action: {
      disabledBackground: "#efefef",
      disabled: "#333333",
    },
  },
});
