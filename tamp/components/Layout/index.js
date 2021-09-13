import React from "react";
import { makeStyles } from "@material-ui/core";
import Wave from "../common/Wave";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  blob: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -99,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Wave className={classes.blob} />
      {children}
    </div>
  );
};

export default Layout;
