import React from "react";
import "../assets/LoginPage.css";
import { GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  return (
    <div class="page">
      <div class="container">
        <div class="left">
          <div class="login">Login</div>
        </div>
        <div class="right">
          <div class="form">
            <label for="email">Email</label>
            <input type="email" id="email" />
            <label for="password">Password</label>
            <input type="password" id="password" />
            <input type="submit" id="submit" value="Submit" />
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
