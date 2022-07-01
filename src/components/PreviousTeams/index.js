import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import data from "../../data/previous-teams.json";
import GoBack from "../Common/GoBack";

import Excom from "../Common/Team/Excom";

import "./styles.css";

function PreviousTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      className="previous-teams mt-5 mb-5 pt-2 pt-md-2 pt-lg-3 pt-xxl-5 pb-1 px-lg-5 px-xxl-5"
      as="section"
    >
      <div className="my-5 pb-1 pb-lg-3 mx-2 mx-md-3 mx-lg-5">
        <GoBack url="/" />
      </div>
      {data["previous-teams"].map((team, index) => (
        <div className="team" key={index} id={team.year}>
          <h1 className="year">{team.year}</h1>
          <Excom data={team.excom} />
        </div>
      ))}
    </Container>
  );
}

export default PreviousTeam;
