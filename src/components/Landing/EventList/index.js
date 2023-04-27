import React, {useEffect, useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SizeMe} from "react-sizeme";
import data from "../../../data/past-events.json";
import {useHistory} from "react-router-dom";
import Button from "../../Common/Button";

const EventList = ({type}) => {
  const coverImgRatio = 16 / 9; // width / height
  let history = useHistory();
  const [events] = useState(data.events);

  useEffect(() => {
    let scrollYPosition = window.localStorage.getItem("scrollYPosition");
    if (scrollYPosition) {
      window.scrollTo(0, parseInt(scrollYPosition));
      window.localStorage.removeItem("scrollYPosition");
    }
  }, []);

  const renderCoverImage = (imgName) => {
    return (
      <SizeMe>
        {({size}) => (
          <div
            className="m-0 p-0 cover-container"
            style={{
              height: size.width / coverImgRatio,
              backgroundImage: `url("../images/event-covers/${imgName}")`,
            }}
          ></div>
        )}
      </SizeMe>
    );
  };

  const EventCard = ({event, index}) => (
    <Card>
      <Card.Header className="p-0 m-0">
        {renderCoverImage(event.image)}
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="my-0">{event.date}</Card.Subtitle>
        <Card.Title as="h3" className="my-3">
          {event.title}
        </Card.Title>
        <div className="card-text-container">
          <Card.Text>{event.summary}</Card.Text>
        </div>
        <div className="text-fade"/>
        <Button
          onClick={() => {
            window.localStorage.setItem(
              "scrollYPosition",
              window.scrollY.toString()
            );
            history.push("/event-details/" + index);
          }}
        >
          Read more
        </Button>
      </Card.Body>
    </Card>
  );

  const EventCards = events.map((event, index) =>
    type === "home" ? (
      <article className="mt-2 mb-4" key={index}>
        <EventCard event={event} index={index}/>
      </article>
    ) : (
      <div className="mt-2 mb-4" key={index}>
        <EventCard event={event} index={index}/>
      </div>
    )
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
  };

  const renderSlider = () => {
    return (
      <SizeMe>
        {({size}) => (
          <Slider
            {...{
              ...sliderSettings,
              slidesToShow:
                size.width < 576
                  ? 1
                  : size.width <= 768
                    ? 2
                    : size.width < 1200
                      ? 3
                      : 4,
              arrows: size.width >= 576,
              speed: size.width >= 576 ? 1000 : 1500,
            }}
            className="mx-3 px-0"
          >
            {EventCards}
          </Slider>
        )}
      </SizeMe>
    );
  };

  if (type === "home") {
    return (
      <Container
        fluid
        className="newslist-section px-3 px-sm-5 py-3 py-sm-4"
        as="section"
      >
        <Row className="pt-2 pb-3 pb-sm-4 mt-3 mb-4 mx-0">
          <Col
            xs={12}
            lg={2}
            className="section-header mt-4 mb-2 pl-0 px-2 px-lg-4 pb-0 pl-xl-5"
            as="header"
          >
            <h3>PAST EVENTS</h3>
          </Col>

          <Col
            xs={12}
            lg={10}
            className="mt-0 mb-2 my-lg-4 card-container px-0 pt-1 pb-1 pl-lg-5 pr-lg-4 px-xl-5"
          >
            {renderSlider()}
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container
        fluid
        className="newslist-section px-3 px-sm-5 py-3 py-sm-4"
        as="section"
      >
        <Row className="pb-2 mt-3 mb-4 mx-0">
          <Col
            xs={12}
            className="section-header mt-4 mb-2 pl-0 px-2 px-lg-4 pb-0 pl-xl-5"
            as="header"
          >
            <h3>ALL EVENTS</h3>
          </Col>

          <Col
            xs={12}
            className="mt-0 mb-2 my-lg-3 card-container px-0 pt-1 pb-1 px-xl-5"
          >
            {renderSlider()}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default EventList;
