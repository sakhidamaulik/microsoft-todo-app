import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
const createTheme =
  process.env.NODE_ENV === "production"
    ? createMuiTheme
    : unstable_createMuiStrictModeTheme;

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          position: "relative",
          color: "#44474c",
          height: "100vh",
          backgroundColor: "#ffffff",
          fontFamily: "Times New Roman, Roboto, sans-serif, cursive", //Caveat
          fontWeight: 600,
          overflowY: "auto",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#0079d7", // Toolbar
    },
    secondary: {
      main: "#3e69e4", // add a task
    },
  },
});
export default theme;
