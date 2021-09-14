import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import { AnimateWrapper } from "../Animate";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
    width: "50%",
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  headerText: {
    textTransform: "uppercase",
    fontSize: "5rem",
    fontFamily: "Anton",
    color: theme.palette.primary.main,
    letterSpacing: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  image: {
    width: 300,
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
}));

const LoadingPage = () => {
  const classes = useStyles();

  return (
    <AnimateWrapper className={classes.root}>
      <img src="/brew.svg" alt="tamper" className={classes.image} />
      <Typography variant="h2">Brewing...</Typography>
    </AnimateWrapper>
  );
};

export default LoadingPage;
