import React, {useEffect, useState} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import "./styles.css";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import data from "../data/past-events.json"

const EventDetails = () => {
  const {id} = useParams();
  const [currentEvent] = useState(data.events[id - 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
      <Container className="event-details-section mt-5 pt-1 pt-md-2 pt-lg-3 pt-xxl-5 pb-1" as="section">

        <div className="my-5 pb-1 pb-lg-3 mx-2 mx-md-3 mx-lg-5">
          <Link to={"/"} style={{textDecoration: "none"}}>
            <Button variant="outline-primary mb-4"><FontAwesomeIcon icon={faArrowLeft} className="me-1"/> Go
              back</Button>
          </Link>
          <Card className="event-details-card text-center align-content-center justify-content-center">
            <Card.Img variant="top" src={"../images/" + currentEvent.image}/>
            <Card.Body>
              <div className="px-3 px-lg-4">
                <Card.Subtitle as="h5" className="my-2">{currentEvent.date}</Card.Subtitle>
                <Card.Title as="h2" className="mt-2 mb-4">{currentEvent.title}</Card.Title>
                <hr/>
                <Card.Text className="my-2 py-3 px-1 px-md-2 px-lg-3">
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
