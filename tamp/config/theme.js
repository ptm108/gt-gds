import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#6F4E37",
    },
    secondary: {
      main: "#37586F",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F1EDEB",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

export default theme;
