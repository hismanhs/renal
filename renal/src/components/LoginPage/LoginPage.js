import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import LoginForm from './LoginForm';


import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <div className="LoginPage">
        <LoginForm />
      </div>
      </div>
    );
  }
}

export default LoginPage;
