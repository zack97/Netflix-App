import React, { useState, useEffect } from "react";
import "../css/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      {/* <img src="/netflixicon.png" alt="Netflix Logo" className="nav__logo" /> */}
      <div>
        <ul>
          <li>
            <h2>
              <a href="./index.html" class="net">
                ZachFliX
              </a>
            </h2>
          </li>
          <li>
            <a href="./Home">Home</a>
          </li>
          <li>
            <a href="./Series">Series</a>
          </li>
          <li>
            <a href="./Movies">Movies</a>
          </li>
          <li>
            <a href="./Most-Watch">Most Watch</a>
          </li>
          <li>
            <a href="./MyList">My List</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="Search">
              <i class="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a href="./Login">Login</a>
          </li>
          <li>
            <a href="./Create-account">Create account</a>
          </li>
          <li>
            <a href="./Notification">
              <i class="fas fa-bell"></i>
            </a>
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Netflix Avatar"
              className="nav__avatar"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
