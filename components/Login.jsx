import React from "react";
import "../css/login.css";

function Login() {
  return (
    <section id="login-container">
      <div className="image-login"></div>
      <div>
        <div className="navlog">
          <div className="navlog-container"></div>
          <h2>
            <a href="#">NETFLIX</a>
          </h2>
        </div>
      </div>
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
            <img
              src="../img/facebook netflix origi.jpeg"
              width="20px"
              alt="Facebook logo"
            />
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

      <footer className="footerlogin">
        <h2>
          Questions? Call <a href="#">0800-800-82</a>
        </h2>
        <div className="footer">
          <div>
            <ul>
              <li>FAQ</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        <div className="navfooter">
          <i className="fas fa-globe"></i>
          <select>
            <option value="Nederlands">Nederlands</option>
            <option value="French">French</option>
            <option value="English">English</option>
          </select>
        </div>
      </footer>
    </section>
  );
}

export default Login;
