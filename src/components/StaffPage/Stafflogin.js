import React, { Component } from 'react';
import AddPatient from './AddPatient';
import NavBar from '../NavBar/NavBar';


class StaffloginPage extends Component {
  render() {
    return (
      <div >
      <NavBar />
        <br></br>
        <AddPatient />
      </div>
    );
  }
}

export default StaffloginPage;
