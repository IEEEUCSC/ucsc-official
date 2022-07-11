import React from "react";

import "./styles.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="wrapper">
        <img
          src="./images/logos/ieeeucsc.webp"
          alt="IEEE Student Branch of UCSC Logo"
        />
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
