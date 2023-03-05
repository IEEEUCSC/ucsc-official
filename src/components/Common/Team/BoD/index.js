import React from "react";

import Member from "../Member";

function BoD({ data }) {
  return (
    <div className="row rows-cols-5 mt-5 justify-content-center">
      {Object.values(data).map((member, index) => (
        <div key={index} className="col-lg-3 col-sm-6 col-6">
          <Member data={member} />
        </div>
      ))}
    </div>
  );
}

export default BoD;
