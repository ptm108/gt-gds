import React from "react";
import { CircularProgress, makeStyles, Typography } from "@material-ui/core";

import { AnimateWrapper } from "../Animate";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(3),
    width: "50%",
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  headerText: {
    color: theme.palette.primary.main,
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
      <Typography variant="h2" className={classes.headerText}>
        Brewing...
      </Typography>
      <CircularProgress />
    </AnimateWrapper>
  );
};

export default LoadingPage;
