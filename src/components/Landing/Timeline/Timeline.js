import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./styles.css";
import img1 from "../../../Assets/MADHACK-logo.png"
import img2 from "../../../Assets/Revolux-logo.png"
import img3 from "../../../Assets/7linesOfCode-logo.png"
import img4 from "../../../Assets/JustDesignThings-logo.png"
import img5 from "../../../Assets/IEEE-Day-2021-logo.png"

const Timeline = () => {
  return (
    <Container className="timeline-section">

      <Row className="section-title">
        <Col xs={12} className="mt-2 mb-3 text-center">
          <h1>TIMELINE</h1>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col xs={12} className="my-3 my-lg-4">

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="Jul - Sep 2021"
              icon={<img src={img1} width="100%" alt="MADHACK logo"/>}
            >
              <h3 className="vertical-timeline-element-title mb-2">MADHACK</h3>
              <h4 className="vertical-timeline-element-subtitle mt-2">Mobile App Development Hackathon</h4>
              <hr/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fuga nihil odit possimus quas.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="Aug - Jul 2021"
              icon={<img src={img2} width="100%" alt="RevolUX logo"/>}
            >
              <h3 className="vertical-timeline-element-title mb-2">RevolUX</h3>
              <h4 className="vertical-timeline-element-subtitle mt-2">Inter-university UI/UX Designathon</h4>
              <hr/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fuga nihil odit possimus quas.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="Jun - Aug 2021"
              icon={<img src={img3} width="100%" alt="7linesOfCode logo"/>}
            >
              <h3 className="vertical-timeline-element-title mb-2">7linesOfCode</h3>
              <h4 className="vertical-timeline-element-subtitle mt-2">7 weeks of pure code!</h4>
              <hr/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fuga nihil odit possimus quas.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="Aug - Oct 2021"
              icon={<img src={img4} width="100%" alt="Just Design Things logo"/>}
            >
              <h3 className="vertical-timeline-element-title mb-2">Just Design Things</h3>
              <h4 className="vertical-timeline-element-subtitle mt-2">Design workshop series</h4>
              <hr/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fuga nihil odit possimus quas.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              date="5th Oct 2021"
              icon={<img src={img5} width="100%" alt="IEEE Day 2021 logo"/>}
            >
              <h3 className="vertical-timeline-element-title mb-2">IEEE Day 2021</h3>
              <h4 className="vertical-timeline-element-subtitle mt-2">Celebrating Global IEEE Day</h4>
              <hr/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fuga nihil odit possimus quas.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>

        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;
