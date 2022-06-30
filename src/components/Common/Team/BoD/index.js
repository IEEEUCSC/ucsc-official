import React from "react";

import Member from "../Member";

function BoD({ data }) {
  return (
    <>
      <div className="row rows-cols-5 mt-5 justify-content-center">
        <div className="col-lg-3 col-sm-6 col-6">
          <Member data={data.web} />
        </div>
        <div className="col-lg-3 col-sm-6 col-6">
          <Member data={data.program} />
        </div>
        <div className="col-lg-3 col-sm-6 col-6">
          <Member data={data.content} />
        </div>
        <div className="col-lg-3 col-sm-6 col-6">
          <Member data={data.design} />
        </div>
        <div className="col-lg-3 col-sm-6 col-6">
          <Member data={data.finance} />
        </div>
        <div className="col-lg-3 col-sm-6 col-6">
          <Member data={data.publicRelations} />
        </div>
      </div>
    </>
  );
}

export default BoD;
