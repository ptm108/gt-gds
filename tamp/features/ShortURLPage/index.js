import React from "react";
import { Button, Card, makeStyles, TextField, Typography } from "@material-ui/core";
import { FileCopyOutlined } from "@material-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    gap: theme.spacing(1),
  },
  textField: {
    margin: theme.spacing(2, 0),
  },
}));

const ShortURLPage = ({ paginate, res }) => {
  const classes = useStyles();
  console.log(res);
  console.log(paginate);

  return (
    <AnimateWrapper className={classes.root}>
      <img src="/latte.svg" alt="tamper" className={classes.image} />
      <Typography variant="h1" className={classes.headerText}>
        Here ya go
      </Typography>
      <Card variant="outlined" className={classes.cardRoot}>
        <TextField
          className={classes.textField}
          margin="dense"
          fullWidth
          variant="outlined"
          placeholder="Your URL to tamp"
          value={`${window ? window.location.href : ""}${res.shortURL}`}
          disabled
        />
        <CopyToClipboard text={`${window ? window.location.href : ""}${res.shortURL}`}>
          <Button color="primary" fullWidth variant="contained" startIcon={<FileCopyOutlined />}>
            Copy
          </Button>
        </CopyToClipboard>
        <Button color="primary" fullWidth onClick={() => paginate(1)}>
          Again!
        </Button>
      </Card>
    </AnimateWrapper>
  );
};

export default ShortURLPage;
