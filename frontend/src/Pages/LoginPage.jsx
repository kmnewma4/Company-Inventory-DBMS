import React from "react";
import "../assets/LoginPage.css";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

const LoginPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="left">
          <div className="login">Login</div>
        </div>
        <div className="right">
          <div className="form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <Link to = {HomePage}>
            <button type = "submit" id = "submit"> SUBMIT </button>
            </Link>
          </div>
          <div className="google">
            <GoogleLogin />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LoginPage;
