import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import data from "../../data/previous-officers.json";
import GoBack from "../Common/GoBack";

import Officers from "../Common/Team/Officers";

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
      <div className="section-header">
        <h3>Previous Officers</h3>
      </div>
      {data["previous-officers"].map((team, index) => (
        <div className="team" key={index} id={team.year}>
          <h2 className="year">{team.year}</h2>
          <Officers officers={team.officers} />
        </div>
      ))}
    </Container>
  );
}

export default PreviousTeam;
