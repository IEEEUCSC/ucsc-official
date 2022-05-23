import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPeopleArrows,
  faProjectDiagram,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import Experience from "./Experience";
import Members from "./Members";
import Likes from "./Likes";

const Stat = () => {
  return (
    <section id="stat">
      <div className="Stat" style={{ backgroundColor: "#00629B" }}>
        <div className="section-header">
          <h3 style={{ color: "white", fontSize: "45px", fontWeight: "800" }}>
            WHAT WE DO
          </h3>
        </div>
        <div className="container container-y">
          <div className="row rows-cols-5 mt-5 justify-content-center">
            <div className="cards cards-y">
              <div className="card-item card-item-y">
                <div className="card-info card-info-y">
                  <h2 className="card-title card-title-y">
                    <FontAwesomeIcon icon={faDesktop} /> Workshops
                  </h2>
                  <p className="card-intro card-intro-y">
                    Comprehensive knowledge plays a major role on setting sights
                    to the advancing technological world. Workshops help in
                    boosting up the students to investigate and expand their
                    scope.
                  </p>
                </div>
              </div>
            </div>
            <div className="cards cards-y">
              <div className="card-item card-item-y">
                <div className="card-info card-info-y">
                  <h2 className="card-title card-title-y">
                    <FontAwesomeIcon icon={faUsers} /> Competitions
                  </h2>
                  <p className="card-intro card-intro-y">
                    In motivating students to develop skills and clinch to
                    greater heights and excel in the IT field. This gives them
                    the opportunity to uncover and showcase their talents.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row rows-cols-5 justify-content-center">
            <div className="cards cards-y">
              <div className="card-item card-item-y">
                <div className="card-info card-info-y">
                  <h2 className="card-title card-title-y">
                    <FontAwesomeIcon icon={faProjectDiagram} /> Events and
                    Activities
                  </h2>
                  <p className="card-intro card-intro-y">
                    Engaging in meaningful and interesting volunteering
                    experiences bring fun and fulfillment to life while paving a
                    way for our members to explore their interests and passions.
                  </p>
                </div>
              </div>
            </div>
            <div className="cards cards-y">
              <div className="card-item card-item-y">
                <div className="card-info card-info-y">
                  <h2 className="card-title card-title-y">
                    <FontAwesomeIcon icon={faPeopleArrows} /> Member Development
                  </h2>
                  <p className="card-intro card-intro-y">
                    The perfect platform for colleagues to engage in dynamic
                    environments which emphasize co-creation and collaboration
                    to develop their distinct and unique personalities and
                    professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden">
          <Experience />
          <Members />
          <Likes />
        </div>

        <div className="cen-div">
          <h3
            style={{
              color: "white",
              fontSize: "45px",
              fontWeight: "800",
              paddingBottom: "20px",
            }}
          >
            OUR STATS
          </h3>
          <div className="container container-x">
            <div className="stat row text-center">
              <div className="stat-item col-lg-4 col-sm-12 col-xs-12 col-md-6">
                <div className="stat-card">
                  <h3 className="stat-title">
                    <span className="prefix">YEARS OF EXPERIENCE</span>
                    <span className="value">
                      <CountUp end={10}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </span>
                  </h3>
                  <div className="stat-icon">
                    <svg>
                      <use xlinkHref="#view" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="stat-item col-lg-4 col-sm-12 col-xs-12 col-md-6">
                <div className="stat-card">
                  <h3 className="stat-title">
                    <span className="prefix">MEMBERS</span>
                    <span className="value">
                      <CountUp end={1000}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </span>
                  </h3>
                  <div className="stat-icon">
                    <svg>
                      <use xlinkHref="#downloads" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="stat-item col-lg-4 col-sm-12 col-xs-12 col-md-6">
                <div className="stat-card">
                  <h3 className="stat-title">
                    <span className="prefix">SOCIAL MEDIA</span>
                    <span className="value">
                      <CountUp end={60000}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </span>
                  </h3>
                  <div className="stat-icon">
                    <svg>
                      <use xlinkHref="#like" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stat;
