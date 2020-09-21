import React, { Component } from 'react';
 import AreaChart from './AreaChart';
import NavBar from '../NavBar/NavBar';



class DoctorPage extends Component {
  render() {
    return (
      <div >
      <NavBar />

    <AreaChart /> 
      </div>
    );
  }
}

export default DoctorPage;

