import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import data from "../../../data/team.json";
import Excom from "../../Common/Team/Excom";
import BoD from "../../Common/Team/BoD";

import "./styles.css";

function Team() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <h3>Our Executive Committee</h3>
          <p style={{ paddingBottom: "20px" }}> Meet Our Team </p>
        </div>
        <Excom data={data.excom} />
        <div className="section-header">
          <h3>Our Standing Committee Leads</h3>
          <p style={{ paddingBottom: "20px" }}> Meet Our Team </p>
        </div>
        <BoD data={data.scom} />
      </div>
    </section>
  );
}

export default Team;
