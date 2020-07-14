import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  textButton: {
    color: "#262626",
    textDecoration: "none",
    float: "right",
  },
  backgroungApp: {
    backgroundColor: "#f2f2f2",
    textDecoration: "none",
    position: "fixed",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.backgroungApp}>
        <Toolbar>
          <div>
            <Typography
              variant="h5"
              style={{
                backgroundColor: "#f2f2f2",
                color: "#2e303e",
                textAlign: "center",
                // paddingLeft: "130px",
              }}
            >
              Flash Shoes
            </Typography>
          </div>
          <Link to="/">
            <Button color="inherit" className={classes.textButton}>
              Home
            </Button>
          </Link>
          <Link to="/">
            <Button color="inherit" className={classes.textButton}>
              Products
            </Button>
          </Link>
          <Link to="/">
            <Button color="inherit" className={classes.textButton}>
              About us
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
