import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(", "),
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 20,
    },
    h3: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: "#131313",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#646464",
      light: '#ABAECC',
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#131313",
      secondary: "#A1A1A1",
    },
    warning: {
      main: '#ffb000',
    },
  },
});
