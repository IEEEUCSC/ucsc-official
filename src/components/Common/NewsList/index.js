import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import data from "../../../data/news-items.json";
import "./styles.css";

const pace = 5000;

const news = data.news;

const NewsList = () => {
  const totalNews = news.length;

  const [newsIndex, setNewsIndex] = useState(0);
  const currentNews = news[newsIndex];
  const nodeDateRef = useRef(null);
  const nodeNewsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prevIndex) => (prevIndex + 1) % totalNews);
    }, pace);

    return () => clearInterval(interval);
  }, [totalNews]);

  return (
    <div className="show-news">
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
  );
}

export default NewsList;