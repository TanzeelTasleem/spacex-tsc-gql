import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "10px",
  },
  menu: {
    color: "white",
  },

  container: {
    backgroundColor: "black",
    height: "100vh",
  },
});

interface prop {
  open: boolean;
  handleOpen: () => void;
}
export const DrawerMenu: React.FC<prop> = ({ open, handleOpen }) => {
  const classes = useStyles();
   const navigate = useNavigate()

  return (
    <div>
      <MUIDrawer
        className={classes.drawer}
        anchor="right"
        variant="temporary"
        open={open}
      >
        <div className={classes.container}>
          <List style={{ width: "200px", color: "white" }}>
            <ListItemIcon
              onClick={() => {
                handleOpen();
              }}
              className={classes.menu}
            >
              <ChevronLeftIcon />
            </ListItemIcon>
             <br/>
             <br/>
            <ListItem button onClick={()=>{navigate('/launches')}}>
              <ListItemText primary="Missions" />
            </ListItem>
          </List>
        </div>
      </MUIDrawer>
    </div>
  );
};
