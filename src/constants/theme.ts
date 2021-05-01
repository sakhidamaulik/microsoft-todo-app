import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          position: "relative",
          color: "#44474c",
          height: "100vh",
          backgroundColor: "#ffffff",
          fontFamily: "Caveat, sans-serif, cursive",
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
