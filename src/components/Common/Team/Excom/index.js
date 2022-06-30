import React from "react";
import Member from "../Member";

function Excom({ data }) {
  return (
    <>
      <div className="row mt-5 justify-content-center">
        <div className="col-lg-3 col-6">
          <Member data={data.chairperson} />
        </div>
        <div className="col-lg-3 col-6">
          <Member data={data.viceChairperson} />
        </div>
        <div className="col-lg-3 col-6">
          <Member data={data.secretary} />
        </div>
        <div className="col-lg-3 col-6">
          <Member data={data.treasurer} />
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-lg-3 col-6">
          <Member data={data.publicityCoord} />
        </div>
        <div className="col-lg-3 offset-lg-1 col-6">
          <Member data={data.programCoord} />
        </div>
        <div className="col-lg-3 offset-lg-1 col-6">
          <Member data={data.membershipCoord} />
        </div>
        <div className="col-lg-3 col-6">
          <Member data={data.designMaster} />
        </div>
        <div className="col-lg-3 offset-lg-1 col-6">
          <Member data={data.webMaster} />
        </div>
      </div>
    </>
  );
}

export default Excom;
