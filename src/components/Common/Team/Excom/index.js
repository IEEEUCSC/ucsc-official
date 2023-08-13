import React from "react";
import Officers from "../Officers";
import Member from "../Member";

function Excom({ data }) {
  return (
    <>
      <Officers officers={data.officers} />
      {/* {[data.coords, data.masters].map((subteam, index) => (
        <div key={index} className="row mt-5 justify-content-center">
          {Object.values(subteam).map((member, index) => (
            <div key={index} className="col-lg-3 col-6">
              <Member data={member} />
            </div>
          ))}
        </div>
      ))} */}
    </>
  );
}

export default Excom;
