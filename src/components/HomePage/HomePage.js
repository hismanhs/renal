import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import HomeImage from './HomeImage.jpg';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <NavBar />
        <img src={HomeImage} alt="HomeImage"  />
      </div>
    );
  }
}

export default HomePage;
