import React, { Component } from 'react';
import {NavItem } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './NavBar.css';


class NavBar extends Component {
  render() {

    return (
<div>
<div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            The Renal Project
          </Typography>
          <Button variant="contained" color="primary" style={{marginLeft: 600}} >
            <NavItem href="/">Home</NavItem>
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            <NavItem href="/login">Login</NavItem>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
      <div>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
      >
      <Tab label="Admin" href="/admin"> 
      </Tab>
      <Tab label="Staff Login" href="/stafflogin"> 
      </Tab>
      <Tab label="Doctor Login" href="/doctorlogin"> 
      </Tab>
      </Tabs>
      </div>
      </div>
    );
  }
}
export default NavBar;




