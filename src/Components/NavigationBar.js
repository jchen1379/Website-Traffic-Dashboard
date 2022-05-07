import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React from "react";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function NavigationBar() {
  return (
    <AppBar elevation={0} position="static" color="transparent">
      <Toolbar sx={{mt: 2}}>
        <Link to={'/'}>
          <Typography variant='h6' color='white' sx={{textShadow: '0px 0px 10px black'}}>
            Back
          </Typography>
        </Link>
      </Toolbar>
      <Toolbar sx={{m: 'auto'}}>
        <Typography variant='h5' color='white' sx={{textShadow: '0px 0px 10px black'}}>
          Website Traffic Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}