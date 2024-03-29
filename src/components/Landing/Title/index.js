import React from "react";
import "./index.css";
import video from "../../../assets/mp4/web_vid.mp4";
import FadeIn from "react-fade-in";

const Title = () => {

  return (
    <div className="title-div">
      <div className="overlay">
        <div className="overlay2"></div>
        <video
          playsInline={true}
          loop={true}
          muted={true}
          autoPlay={true}
          style={{width: "100%"}}
        >
          <source src={video} type="video/mp4"/>
        </video>
      </div>

      <div className="masthead">
        <div className="masthead-bg"></div>
        <div className="container h-100">
          <div className="row h-25"></div>
          <div className="row h-50">
            <div className="col-12 my-auto">
              <div className="masthead-content text-white py-5 py-md-0">
                <FadeIn delay="300" transitionDuration="800">
                  <h1 className="mb-3 title-title">WELCOME TO IEEE UCSC !</h1>
                  <br/>
                </FadeIn>
                <FadeIn delay="400" transitionDuration="800">
                  <p className="mb-5">
                    Experience the joy of <strong>learning</strong> with us.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
