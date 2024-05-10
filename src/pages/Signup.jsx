// Signup.jsx
import React from "react";
import "../../css/Signup.css";

function Signup() {
  return (
    <section id="signup-container">
      <div className="signup">
        <div className="signup-border">
          <h1>Sign Up</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign up</button>
          <p>
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
