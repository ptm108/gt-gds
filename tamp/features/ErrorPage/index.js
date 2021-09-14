import React from "react";
import { Button, Card, makeStyles, TextField, Typography } from "@material-ui/core";
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
    fontSize: "4rem",
    fontFamily: "Anton",
    color: theme.palette.primary.main,
    letterSpacing: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  image: {
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  cardRoot: {
    flex: 1,
    width: "100%",
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  typography: {
    margin: "8px auto 16px",
    textAlign: "center",
  },
}));

const ErrorPage = ({ paginate, res }) => {
  const classes = useStyles();

  return (
    <AnimateWrapper className={classes.root}>
      <img src="/broken.svg" alt="tamper" className={classes.image} />
      <Typography variant="h1" className={classes.headerText}>
        Whoops
      </Typography>
      <Card variant="outlined" className={classes.cardRoot}>
        <Typography variant="body1" className={classes.typography}>
          {res.error}
        </Typography>
        <Button color="primary" fullWidth variant="contained" onClick={() => paginate(1)}>
          Again!
        </Button>
      </Card>
    </AnimateWrapper>
  );
};

export default ErrorPage;
