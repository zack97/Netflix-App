import React, { useState, useEffect } from "react";
import "./Nav.css";

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
                NETFLIX
              </a>
            </h2>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Most Watch</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Create account</a>
          </li>
          <li>
            <a href="#">
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
