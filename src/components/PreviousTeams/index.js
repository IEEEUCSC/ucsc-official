import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import data from "../../data/previous-teams.json";

import Excom from "../Common/Team/Excom";

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
        {/* TODO Make this a component */}
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button variant="outline-primary mb-4">
            <FontAwesomeIcon icon={faArrowLeft} className="me-1" /> Go back
          </Button>
        </Link>
      </div>
      {data["previous-teams"].map((team) => (
        <div className="team">
          <h1 className="year">{team.year}</h1>
          <Excom data={team.excom} />
        </div>
      ))}
    </Container>
  );
}

export default PreviousTeam;
