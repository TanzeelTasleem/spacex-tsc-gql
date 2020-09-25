import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../../components/images/logo.png";
import { DrawerMenu } from "./drawer/drawer";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Slide, useScrollTrigger } from "@material-ui/core";

const useStyles: any = makeStyles(() =>
  createStyles({
    header: {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    menu: {
      color: "white",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);

const HideOnScroll: React.FC<any> = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setValue(false);
  };
  return (
    <div>
      <HideOnScroll>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              onClick={() => {
                navigate("/");
              }}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <img className="logo" src={Logo} alt="logo"></img>
            </IconButton>
            <Box>
              <Button
                className={classes.menu}
                onClick={() => {
                  setValue(!value);
                }}
              >
                <MenuIcon />
              </Button>
              <DrawerMenu open={value} handleOpen={handleOpen} />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
