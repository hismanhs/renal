import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
 import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import AdminPage from './components/AdminPage/AdminPage';
import DoctorPage from './components/DoctorPage/Doctorlogin';
import StaffloginPage from './components/StaffPage/Stafflogin';

import './App.css';

 const Home = () => (
   <HomePage />
 );

const Login = () => (
  <LoginPage />
);

const Admin =() =>(
  <AdminPage />
  );
const Stafflogin=()=>(
  <StaffloginPage />
);
const Doctorlogin=()=>(
   <DoctorPage />
 );
class App extends Component {
  render() {
    return <Router>
        <div className="App">
          <Route exact path="/" component={Home} /> 
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/stafflogin" component={Stafflogin} />
          <Route path="/doctorlogin" component={Doctorlogin} />
        </div>
      </Router>
  }
}

export default App;
