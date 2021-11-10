import React from 'react'
import './index.css'
import video from "../../../assets/mp4/web_vid.mp4"
import FadeIn from 'react-fade-in';
import $ from 'jquery';

var pace = 5000; //Pace show

//News and links
const news = [
  {
    month: "OCT",
    date: "22",
    news: "ReidXtreme 2.0 - Officially Announced",
    content: "Visit our ReidXtreme 2.0 official page",
    link: "https://reidxtreme.ucscieee.com/"
  },
  {
    month: "OCT",
    date: "25",
    news: "MADHack Winners - Officially Announced",
    content: "Visit our MADHack official page",
    link: "https://madhack.ucscieee.com/"
  },
  {
    month: "OCT",
    date: "20",
    news: "IEEE Day Latest",
    content: "So for this year, the IEEE",
    link: "https://ieeeday.org/"

  },
];



const shownews = news.map((key) => key.news);
const newslink = news.map((key) => key.link);
const newsmonth = news.map((key) => key.month);
const newsdate = news.map((key) => key.date);
const newstext = news.map((key) => key.content);

//Show News and links
function allnews() {

  for (let i = 0; i < news.length; i++) {

    setTimeout(function () {

      $("#text").fadeOut("slow", function () {
        $("#text").html("<a href=" + newslink[i] + ">" + shownews[i] + "</a>");
      });
      $("#text").fadeIn();

      $("#date").fadeOut("slow", function () {
        $("#date").html(newsmonth[i] + "<span>" + newsdate[i] + "</span>");
      });
      $("#date").fadeIn();

      $("#para").fadeOut("slow", function () {
        $("#para").html("<a href=" + newslink[i] + ">" + newstext[i] + "</a>");
      });
      $("#para").fadeIn();

    }, pace * i);

  }

}

allnews();
var callCount = 1;
var repeater = setInterval(function () {
  if (callCount < 10) {
    allnews();
    callCount += 1;
  } else {
    clearInterval(repeater);
  }
}, 20000);

const Title = () => {
  return (

    <div className="title-div">
      <div className="overlay">
        <div className="overlay2"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" style={{ width: "100%" }}>
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
                  <h1 className="mb-3 title-title">WELCOME TO IEEE UCSC !</h1><br />
                </FadeIn>
                <FadeIn delay="400" transitionDuration="800">
                  <p className="mb-5">Experience the joy of <strong>learning</strong> with us.</p>
                </FadeIn>
              </div>
            </div>
          </div>
          <div className="h-25">
            <div className="shownews">
              <div className="title" id="date"></div>
              <div id="news">
                <span id="text"></span>
                <span id="para"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Title
