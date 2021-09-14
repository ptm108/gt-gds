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

theme.typography.h1 = {
  fontSize: "2.25rem",
  fontFamily: "Montserrat",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};

theme.typography.h2 = {
  fontSize: "1.875rem",
  fontFamily: "Montserrat",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.625rem",
  },
};

theme.typography.h3 = {
  fontSize: "1.75rem",
  fontFamily: "Montserrat",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.625rem",
  fontFamily: "Montserrat",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.375rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.375rem",
  fontWeight: 400,
  fontFamily: "Montserrat",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
};

theme.typography.h6 = {
  fontSize: "1.25rem",
  fontWeight: 400,
  fontFamily: "Montserrat",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
};

theme.typography.subtitle1 = {
  fontSize: "1rem",
  fontFamily: "Montserrat",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9375rem",
  },
};

theme.typography.body1 = {
  fontSize: "1rem",
  fontFamily: "Montserrat",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9375rem",
  },
};

theme.typography.body2 = {
  fontSize: "0.9375rem",
  fontFamily: "Montserrat",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
};

export default theme;
