import React from "react";
import { Link } from "react-scroll";
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
            <Link to="home" smooth={true}>
              Home
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="about-us" smooth={true}>
              About Us
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="what-we-do" smooth={true}>
              What we do
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="timeline" smooth={true}>
              Timeline
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="past-events" smooth={true}>
              Past Events
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="team" smooth={true}>
              Team
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="contact-us" smooth={true}>
              Contact Us
            </Link>
          </li>
        </ul>
        <p className="copyright">© 2022 - All Right Reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
