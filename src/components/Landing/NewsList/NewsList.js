import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SizeMe} from 'react-sizeme'

const NewsList = () => {

  // const getSlidesCount = () => {
  //   const w = window.innerWidth;
  //   if (w < 576) {
  //     return 1;
  //   } else if (w <= 768) {
  //     return 2;
  //   } else if (w < 1200) {
  //     return 3;
  //   } else {
  //     return 4;
  //   }
  // }

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true
  };

  const renderSlider = () => {
    return <SizeMe>{({size}) =>

      <Slider {...{
        ...sliderSettings,
        slidesToShow: size.width < 576 ? 1 : size.width <= 768 ? 2 : size.width < 1200 ? 3 : 4,
        arrows: size.width >= 576,
        speed: size.width >= 576 ? 1000 : 1500,
      }} className="mx-3 px-0">

        <div className="mt-2 mb-4">
          <Card>
            <Card.Img variant="top" src="/images/1.png"/>
            <Card.Body>
              <Card.Subtitle className="my-1">30 Nov 2019</Card.Subtitle>
              <Card.Title as="h3" className="my-3">GameRush 2019</Card.Title>
              <Card.Text>
                UCSC IEEE Day 2017 was celebrated with much grace and grandeur on 11th of October 2017 at the New
                Arts Theatre of University of Colombo.
              </Card.Text>
              <Button variant="outline-primary">Read more</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-2 mb-3">
          <Card>
            <Card.Img variant="top" src="/images/1.png"/>
            <Card.Body>
              <Card.Subtitle className="my-1">30 Nov 2019</Card.Subtitle>
              <Card.Title as="h3" className="my-3">GameRush 2019</Card.Title>
              <Card.Text>
                UCSC IEEE Day 2017 was celebrated with much grace and grandeur on 11th of October 2017 at the New
                Arts Theatre of University of Colombo.
              </Card.Text>
              <Button variant="outline-primary">Read more</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-2 mb-3">
          <Card>
            <Card.Img variant="top" src="/images/1.png"/>
            <Card.Body>
              <Card.Subtitle className="my-1">30 Nov 2019</Card.Subtitle>
              <Card.Title as="h3" className="my-3">GameRush 2019</Card.Title>
              <Card.Text>
                UCSC IEEE Day 2017 was celebrated with much grace and grandeur on 11th of October 2017 at the New
                Arts Theatre of University of Colombo.
              </Card.Text>
              <Button variant="outline-primary">Read more</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-2 mb-3">
          <Card>
            <Card.Img variant="top" src="/images/1.png"/>
            <Card.Body>
              <Card.Subtitle className="my-1">30 Nov 2019</Card.Subtitle>
              <Card.Title as="h3" className="my-3">GameRush 2019</Card.Title>
              <Card.Text>
                UCSC IEEE Day 2017 was celebrated with much grace and grandeur on 11th of October 2017 at the New
                Arts Theatre of University of Colombo.
              </Card.Text>
              <Button variant="outline-primary">Read more</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-2 mb-3">
          <Card>
            <Card.Img variant="top" src="/images/1.png"/>
            <Card.Body>
              <Card.Subtitle className="my-1">30 Nov 2019</Card.Subtitle>
              <Card.Title as="h3" className="my-3">GameRush 2019</Card.Title>
              <Card.Text>
                UCSC IEEE Day 2017 was celebrated with much grace and grandeur on 11th of October 2017 at the New
                Arts Theatre of University of Colombo.
              </Card.Text>
              <Button variant="outline-primary">Read more</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-2 mb-3">
          <Card>
            <Card.Img variant="top" src="/images/1.png"/>
            <Card.Body>
              <Card.Subtitle className="my-1">30 Nov 2019</Card.Subtitle>
              <Card.Title as="h3" className="my-3">GameRush 2019</Card.Title>
              <Card.Text>
                UCSC IEEE Day 2017 was celebrated with much grace and grandeur on 11th of October 2017 at the New
                Arts Theatre of University of Colombo.
              </Card.Text>
              <Button variant="outline-primary">Read more</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-2 mb-3">
          <Card>
            <Card.Img variant="top" src="/images/1.png"/>
            <Card.Body>
              <Card.Subtitle className="my-1">30 Nov 2019</Card.Subtitle>
              <Card.Title as="h3" className="my-3">GameRush 2019</Card.Title>
              <Card.Text>
                UCSC IEEE Day 2017 was celebrated with much grace and grandeur on 11th of October 2017 at the New
                Arts Theatre of University of Colombo.
              </Card.Text>
              <Button variant="outline-primary">Read more</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-2 mb-3">
          <Card>
            <Card.Img variant="top" src="/images/1.png"/>
            <Card.Body>
              <Card.Subtitle className="my-1">30 Nov 2019</Card.Subtitle>
              <Card.Title as="h3" className="my-3">GameRush 2019</Card.Title>
              <Card.Text>
                UCSC IEEE Day 2017 was celebrated with much grace and grandeur on 11th of October 2017 at the New
                Arts Theatre of University of Colombo.
              </Card.Text>
              <Button variant="outline-primary">Read more</Button>
            </Card.Body>
          </Card>
        </div>

      </Slider>

    }</SizeMe>
  }

  return (
    <Container fluid className="newslist-section px-3 px-sm-5 py-3 py-sm-4" as="section">

      <Row className="pt-2 pb-3 pb-sm-4 mt-3 mb-4 mx-0">
        <Col xs={12} lg={2} className="section-header mt-4 mb-2 pl-0 px-2 px-lg-4 pb-0 pl-xl-5" as="header">
          <h3>PAST EVENTS</h3>
        </Col>

        <Col xs={12} lg={10} className="mt-0 mb-2 my-lg-4 card-container px-0 pt-1 pb-2 pl-lg-5 pr-lg-4 px-xl-5">
          {renderSlider()}
        </Col>
      </Row>

    </Container>
  );
};

export default NewsList;
