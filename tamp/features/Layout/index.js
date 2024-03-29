import React from "react";
import { Link, makeStyles, Typography } from "@material-ui/core";

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
    backgroundImage: "url('/blob-scene.svg')",
    backgroundSize: "cover",
    gap: theme.spacing(1),
  },
  credits: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
      textAlign: "center",
    },
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
      <div className={classes.credits}>
        Icons made by{" "}
        <Link href="https://www.flaticon.com/authors/surang" title="surang">
          surang
        </Link>
        ,{" "}
        <Link href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">
          Darius Dan
        </Link>
        ,{" "}
        <Link href="https://www.flaticon.com/authors/those-icons" title="Those Icons">
          Those Icons
        </Link>
        ,{" "}
        <Link href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </Link>{" "}
        from{" "}
        <Link href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </Link>
      </div>
    </div>
  );
};

export default Layout;
