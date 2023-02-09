import React from "react";
import "../../Styles/Login/Login.css";

function Login() {
  return (
    <div id="loginPage">
      <div id="loginImage">
        <img src="./Images/Login/loginImg.svg" alt="Login To Dreamify.Pro" />
      </div>
      <div id="loginForm">
        <div id="dreamifyLogo">
          <img src="./Images/logo.svg" alt="" />
        </div>
        <div id="loginHereTextContainer">
          <img src="./Images/Login/loginBg.svg" alt="..." />
          <div id="loginHereText">LOGIN HERE</div>
        </div>
        <div id="username-input" className="inputContainer">
          <input type="text" placeholder="Username" />
        </div>
        <div id="password-input" className="inputContainer">
          <input type="text" placeholder="Password" />
          <div id="eyeIcon">
            <img src="./Images/Login/EyeIcon.svg" alt="" />
          </div>
        </div>
        <input id="loginButton" type="button" value="Login" />
        <div id="rememberMeContainer">
          <span>Remember Me</span>
          <input
            type="checkbox"
            name="rememberMeCheckbox"
            id="rememberMeCheckbox"
          />
        </div>
        <div id="forgottenPasswordContainer">Forgetten Password?</div>
      </div>
    </div>
  );
}

export default Login;
