import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer class="footerlogin footerlogin-accueil">
      <h2>
        Questions? Call <a href="#">0800-800-82</a>
      </h2>
      <div class="footer">
        <div>
          <ul>
            <li>Audio and subtitles</li>
            <li>Press</li>
            <li>Privacy</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Audio description</li>
            <li>Investor Relations</li>
            <li>Legal information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Careers</li>
            <li>Cookie preferences</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift cards</li>
            <li>Terms of use</li>
            <li>Legal notices</li>
          </ul>
        </div>
      </div>

      <div class="navfooter">
        <i class="fas fa-globe"></i>
        <select>
          <option value="">Security code</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
