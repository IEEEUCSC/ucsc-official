import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import data from "../../../data/team.json";

const ContactUs = () => {
  const officers = Object.values(data.excom.officers);

  return (
    <section id="contact">
      <div className="container container-yas">
        <div className="section-header">
          <h3>WE ARE THE IEEE SB OF UCSC</h3>
        </div>

        <div className="form formy">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Post, email or call us - whichever works for you.
            </p>
            <div className="info">
              <div className="social-information">
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> IEEE Student Branch
                  of UCSC,
                  <br />
                  &nbsp;&nbsp;&nbsp; University of Colombo School of Computing,
                  <br />
                  &nbsp;&nbsp;&nbsp; 35, Reid Avenue,
                  <br />
                  &nbsp;&nbsp;&nbsp; Colombo 7.
                </p>
              </div>
              <div className="social-information">
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a className="email" href="mailto:ucscieee@gmail.com">
                    &nbsp;ucscieee@gmail.com
                  </a>
                </p>
              </div>
              <div className="social-information">
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  <a className="tel" href="tel:+94112843687">
                    +94 112 843 687
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="contact-info-form">
            <span className="circle one"></span>{" "}
            <span className="circle two"></span>
            <h3 className="titlec">Contact Us</h3>
            {officers.map((officer, index) => (
              <div key={index}>
                <hr />
                <p>
                  <b>{officer.name}</b> <br />
                  {officer.post}, IEEE Student Branch of UCSC
                  <br />
                  <a className="email" href={"mailto:" + officer.email}>
                    {officer.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
