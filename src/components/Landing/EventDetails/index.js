import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./styles.css";
import data from "../../../data/past-events.json";
import GoBack from "../../Common/GoBack";

const EventDetails = () => {
  const { id } = useParams();
  const [currentEvent] = useState(data.events[id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      className="event-details-section mt-5 pt-2 pt-md-2 pt-lg-3 pt-xxl-5 pb-1 px-lg-5 px-xxl-5"
      as="section"
    >
      <div className="my-5 pb-1 pb-lg-3 mx-2 mx-md-3 mx-lg-5">
        <GoBack url="/" />
        <Card className="event-details-card text-center align-content-center justify-content-center">
          <Card.Img
            variant="top"
            width="100%"
            src={"../images/event-covers/" + currentEvent.image}
          />
          <Card.Body>
            <div className="px-3 px-lg-4">
              <Card.Subtitle as="h5" className="my-2 pt-lg-2">
                {currentEvent.date}
              </Card.Subtitle>
              <Card.Title as="h2" className="mt-2 mb-4">
                {currentEvent.title}
              </Card.Title>
              <hr />
              <Card.Text className="my-2 pt-3 py-2 px-0 px-md-2 px-lg-3 py-xxl-4">
                {currentEvent.description}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default EventDetails;
