import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/intro.css';
import logo from './assets/SkySage_logo_light.png';
import Signup from './Signup';
import UserCredentials from './UserCredentials';

const IntroPage = () => {




  return (
    <div className="intro-container">
      <div className="left">
      <div >
              <img src={logo} alt="Logo" className="logo" />
            </div>
        <h1>Welcome to SkySage</h1>
        <p>The app of choice for weather predictions. Never let the weather catch you off guard by staying up to speed on the most recent weather reports. With SkySage, you can access real-time data, weather alerts, and more.</p>
      </div>
      <div className="right">
        <UserCredentials/>
      </div>
    </div>
  );
};

export default IntroPage;
