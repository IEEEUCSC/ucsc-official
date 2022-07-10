import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function Member({ data }) {
  const [firstName, lastName] = data.name.split(" ").slice(0, 2);
  return (
    <div className="member">
      <div className="pic">
        <img src={"../images/team/" + data.img} alt={data.name} />
      </div>
      <div className="title-wrapper">
        <h3 className="title">{firstName}</h3>
        <h3 className="title">{lastName}</h3>
      </div>
      <div className="post-wrapper">
        <span className="post">{data.post}</span>
      </div>
      <ul className="social">
        {data.linkedin ? (
          <li>
            <a href={data.linkedin} title={firstName + "'s LinkedIn"}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        ) : null}
        {data.facebook ? (
          <li>
            <a href={data.facebook} title={firstName + "'s Facebook"}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
        ) : null}
        {data.instagram ? (
          <li>
            <a href={data.instagram} title={firstName + "'s Instagram"}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        ) : null}
        <li>
          <a href={"mailto:" + data.email} title={firstName + "'s email"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Member;
