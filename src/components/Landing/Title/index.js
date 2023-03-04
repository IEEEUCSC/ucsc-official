import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import video from "../../../assets/mp4/web_vid.mp4";
import FadeIn from "react-fade-in";
import data from "../data/title-news.json";
import { CSSTransition, SwitchTransition } from "react-transition-group";

//News and links
const news = data.news;

const Title = () => {
  const totalNews = news.length;

  const [newsIndex, setNewsIndex] = useState(0);
  const currentNews = news[newsIndex];
  const nodeDateRef = useRef(null);
  const nodeNewsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prevIndex) => (prevIndex + 1) % totalNews);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalNews]);

  return (
    <div className="title-div">
      <div className="overlay">
        <div className="overlay2"></div>
        <video
          playsInline={true}
          loop={true}
          muted={true}
          autoPlay={true}
          style={{ width: "100%" }}
        >
          <source src={video} type="video/mp4" />
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
                  <br />
                </FadeIn>
                <FadeIn delay="400" transitionDuration="800">
                  <p className="mb-5">
                    Experience the joy of <strong>learning</strong> with us.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
          <div className="h-25">
            <div className="shownews">
              <div className="title" id="date">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={newsIndex}
                    nodeRef={nodeDateRef}
                    addEndListener={(done) => {
                      nodeDateRef.current.addEventListener(
                        "transitionend",
                        done,
                        false
                      );
                    }}
                    classNames="fade"
                  >
                    <div ref={nodeDateRef}>
                      {currentNews.month}
                      <span>{currentNews.date}</span>
                    </div>
                  </CSSTransition>
                </SwitchTransition>
              </div>
              <div className="news" id="news">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={newsIndex}
                    nodeRef={nodeNewsRef}
                    addEndListener={(done) => {
                      nodeNewsRef.current.addEventListener(
                        "transitionend",
                        done,
                        false
                      );
                    }}
                    classNames="fade"
                  >
                    <div ref={nodeNewsRef}>
                      <span id="text">
                        <a
                          href={currentNews.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {currentNews.news}
                        </a>
                      </span>
                      <span id="para">
                        <a href={currentNews.link}>{currentNews.content}</a>
                      </span>
                    </div>
                  </CSSTransition>
                </SwitchTransition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
