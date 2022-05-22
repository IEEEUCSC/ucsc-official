import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { IoIosArrowDropupCircle as ScrollUpIcon } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const SocialMedia = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <a
        href="https://www.facebook.com/IEEE.UCSC/"
        class="btn-pulse btn-pulse-border btn-pulse-border-fb"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://www.linkedin.com/company/ucscieeesb/"
        class="btn-pulse btn-pulse-border btn-pulse-border-insta"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://www.instagram.com/ucsc.ieee/?igshid=138jsgkp9rjmz"
        class="btn-pulse btn-pulse-border btn-pulse-border-linked"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <ScrollUpIcon
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      />
    </div>
  );
};

export default SocialMedia;
