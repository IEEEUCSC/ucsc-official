import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function PreviousTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      className="previous-teams mt-5 pt-2 pt-md-2 pt-lg-3 pt-xxl-5 pb-1 px-lg-5 px-xxl-5"
      as="section"
    >
      <div className="my-5 pb-1 pb-lg-3 mx-2 mx-md-3 mx-lg-5">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button variant="outline-primary mb-4">
            <FontAwesomeIcon icon={faArrowLeft} className="me-1" /> Go back
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default PreviousTeam;
