import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import data from "../data/team.json";

const ContactUs = () => {
  const excom = data.excom;
  const officers = [
    excom.chairperson,
    excom.viceChairperson,
    excom.secretary,
    excom.treasurer,
  ];

  return (
    <section id="contact">
      <div class="container container-yas">
        <div class="section-header">
          <h3>WE ARE THE IEEE SB OF UCSC</h3>
        </div>

        <div class="form formy">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
              Post, email or call us - whichever works for you.
            </p>
            <div class="info">
              <div class="social-information">
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
              <div class="social-information">
                {" "}
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a class="email" href="mailto:ucscieee@gmail.com">
                    &nbsp;ucscieee@gmail.com
                  </a>
                </p>
              </div>
              <div class="social-information">
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +94 112843687
                </p>
              </div>
            </div>
          </div>
          <div class="contact-info-form">
            <span class="circle one"></span> <span class="circle two"></span>
            <h3 class="titlec">Contact us</h3>
            <p>
              {officers.map((officer) => (
                <>
                  <hr />
                  <b>{officer.name}</b> <br />
                  {officer.post}, IEEE Student Branch of UCSC
                  <br />
                  <a class="email" href={"mailto:" + officer.email}>
                    {officer.email}
                  </a>
                </>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
