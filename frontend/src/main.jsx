import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="195044032993-1eohkc391ob5ltbtflj69rfse2960sn5.apps.googleusercontent.com">
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
