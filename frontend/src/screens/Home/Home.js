import LoginImage from './../../assets/images/LoginImage.png';
import React from "react";
import HomeImage from "./../../assets/images/HomeImage.png";
import "./Home.scss";
import { Link } from 'react-router-dom'
import layout from "./../../layout.js";



const Home = () => {
  return (
    <div className="home-main">
      <div className="image-container">
        <img src={HomeImage} alt="Home Image" />
      </div>

      <div className="Home_LoginForm">
        <div class="card">
          <h5 class="card-header">Login / Signup</h5>
          <div class="card-body">
            <img src = {LoginImage} alt="Login" />
            <label for="phone">Enter your phone number:</label>

            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>

            <a href="/layout" class="btn btn-primary">Send OTP</a>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
