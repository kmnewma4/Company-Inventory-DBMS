import React from "react";
import "../assets/LoginPage.css";
import { FaUser, FaGoogle } from "react-icons/fa";

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
            <div>
              {/* <button>
                Continue as guest <FaUser />
              </button>
              <button>
                Login with Google <FaGoogle />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
