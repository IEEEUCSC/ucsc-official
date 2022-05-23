import React from "react";
import logo from "../../../assets/ieeeucsc.webp";
import "./index.css";

function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="logo-foot col-lg-5">
          <img
            src={logo}
            alt="IEEE-UCSC"
            className="img-foot"
            style={{ width: "50%" }}
          />
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <button>Home</button>
          </li>
          <li className="list-inline-item">
            <button>About Us</button>
          </li>
          <li className="list-inline-item">
            <button>What we do</button>
          </li>
          <li className="list-inline-item">
            <button>Timeline</button>
          </li>
          <li className="list-inline-item">
            <button>Past Events</button>
          </li>
          <li className="list-inline-item">
            <button>Team</button>
          </li>
          <li className="list-inline-item">
            <button>Contact Us</button>
          </li>
        </ul>
        <p className="copyright">© 2022 - All Right Reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
