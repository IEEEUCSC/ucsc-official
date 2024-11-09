import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../../assets/ieeeucsc.webp";
import "./styles.css";

function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="logo-foot col-lg-5">
          <img
            src={logo}
            alt="IEEE-UCSC"
            className="img-foot"
            style={{ width: "60%" }}
          />
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link href="#home" to="home">
              Home
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="#about-us" to="about-us">
              About Us
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="#what-we-do" to="what-we-do">
              What we do
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="#timeline" to="timeline">
              Timeline
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="#past-events" to="past-events">
              Past Events
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href="#team" to="team">
              Current Team
            </Link>
          </li>
          <li className="list-inline-item">
            <RouterLink
              to="/previous-officers"
              onClick={() => {
                window.localStorage.setItem(
                  "scrollYPosition",
                  window.scrollY.toString()
                );
              }}
            >
              Previous Officers
            </RouterLink>
          </li>
          <li className="list-inline-item">
            <Link href="#contact-us" to="contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
        <p className="copyright">© {new Date().getFullYear()} - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
