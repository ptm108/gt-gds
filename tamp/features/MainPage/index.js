import React, { Fragment, useState } from "react";
import { Button, Card, makeStyles, TextField, Typography } from "@material-ui/core";

import { createShortenedURL } from "./api";
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
  cardRoot: {
    flex: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  textField: {
    margin: theme.spacing(2, 0),
  },
}));

const MainPage = ({ paginate, setRes }) => {
  const classes = useStyles();

  const [longURL, setLongURL] = useState("");

  const handleSubmit = async () => {
    paginate(2);

    createShortenedURL(longURL)
      .then((res) => {
        console.log(res);
        setRes(res.data);
        setTimeout(() => paginate(3), 800);
      })
      .catch((err) => {
        console.log(err);
        setRes(err.response.data);
        setTimeout(() => paginate(4), 800);
      })
      .finally(() => setLongURL(""));
  };

  return (
    <AnimateWrapper className={classes.root}>
      <img src="/tamper.svg" alt="tamper" className={classes.image} />
      <Typography variant="h1" className={classes.headerText}>
        URL Tamper
      </Typography>
      <Card variant="outlined" className={classes.cardRoot}>
        <Typography variant="h5" style={{ fontWeight: 500 }}>
          tamp
        </Typography>
        <Typography color="textSecondary">
          <i>/ verb /</i>
        </Typography>
        <Typography variant="body2">
          the method a barista uses to turn loose coffee into a tightly compressed puck
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            margin="dense"
            fullWidth
            variant="outlined"
            placeholder="Your URL to tamp"
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
          />
          <Button color="primary" fullWidth variant="contained" type="submit">
            TAMP IT
          </Button>
        </form>
      </Card>
    </AnimateWrapper>
  );
};

export default MainPage;
