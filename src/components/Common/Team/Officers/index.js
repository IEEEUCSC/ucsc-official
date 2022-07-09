import React from "react";
import Member from "../Member";

const Officers = ({ officers }) => {
  return (
    <div className="row mt-5 justify-content-center">
      {Object.values(officers).map((officer, index) => (
        <div key={index} className="col-lg-3 col-6">
          <Member data={officer} />
        </div>
      ))}
    </div>
  );
};

export default Officers;
