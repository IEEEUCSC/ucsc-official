import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles.css";
import data from "../data/timeline-events.json";

const Timeline = () => {
  const [events] = useState(data.events);

  const TimelineElements = events.map((event, index) => (
    <VerticalTimelineElement
      key={index}
      className="vertical-timeline-element"
      date={event.date}
      icon={
        <img
          src={"./images/event-logos/" + event.iconSrc}
          alt={event.altText}
          width="100%"
        />
      }
    >
      <h3 className="vertical-timeline-element-title mb-2">{event.title}</h3>
      <h4 className="vertical-timeline-element-subtitle mt-2">
        {event.subTitle}
      </h4>
      <hr />
      <p>{event.description}</p>
    </VerticalTimelineElement>
  ));

  return (
    <Container className="timeline-section">
      <Row className="section-title">
        <Col xs={12} className="mt-2 mb-3 text-center">
          <h1>TIMELINE</h1>
        </Col>
      </Row>

      <Row className="mb-5 timeline-elements">
        <Col xs={12} className="my-3 my-lg-4">
          <VerticalTimeline>{TimelineElements}</VerticalTimeline>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;
