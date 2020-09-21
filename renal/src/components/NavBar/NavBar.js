import React, { Component } from 'react';
import {NavItem } from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './NavBar.css';
import { connect } from 'react-redux';



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
            <NavItem href="/login">{this.props.user == '' ?"Log In":"Log Out"}</NavItem>
          </Button>
        </Toolbar>
      </AppBar>

    </div>
      <div>
      {/* <Tabs
        indicatorColor="primary"
        textColor="primary"
      >
      <Tab label="Admin" href="/admin"> 
      </Tab>
      <Tab label="Staff Login" href="/stafflogin"> 
      </Tab>
      <Tab label="Doctor Login" href="/doctorlogin"> 
      </Tab>
      </Tabs> */}
      </div>
      </div>
    );
  }
}

//connect 
// read stagte - user

//read from redux state
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user || []
  }
};

// //to write to redux state
// const mapDispatchToProps = (dispatch) => {
//   return {
//    // createPatient: contact => dispatch(createPatient(contact))
//   }
// };

export default connect(mapStateToProps, null)(NavBar);






