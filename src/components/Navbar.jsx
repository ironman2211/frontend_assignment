// Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#54efc4', height: '60px' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <div className="ml-14">
          <Typography style={{color: 'black'}} variant="h6" component="div">
            Weekday
          </Typography>
        </div>
        <div className="mr-14">
          <IconButton color="inherit">
            <Avatar />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
