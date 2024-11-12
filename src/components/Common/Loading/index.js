import React from "react";
import logo from "../../../assets/ieeeucsc.webp";
import "./styles.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="wrapper">
        <img
          src={logo}
          alt="IEEE Student Branch of UCSC Logo"
          style={{ width: "50%", paddingBottom: "20px" }}
        />
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
