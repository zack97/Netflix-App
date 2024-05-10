import React from "react";
import "./../../css/login.css";
import { FaFacebook } from "react-icons/fa";

function Login() {
  return (
    <section id="login-container">
      {/* <div className="image-login"></div> */}
      <div className="login">
        <div className="login-border">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button>
            <a href="#">Sign in</a>
          </button>
          <ul>
            <li>
              <span>&#10003;</span>Remember me
            </li>
            <li>
              <a href="#">Need help?</a>
            </li>
          </ul>
          <div className="with">
          <FaFacebook />
            <p>Login with Facebook</p>
          </div>
          <div className="with">
            <p>New to Netflix?</p>
            <span>Sign up now.</span>
          </div>
          <p>
            This page is protected by Google reCAPTCHA to <br /> ensure you're
            not a bot. <a href="#">Learn more.</a>
          </p>
        </div>
      </div>

    </section>
  );
}

export default Login;
