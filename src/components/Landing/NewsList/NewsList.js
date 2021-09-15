import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 750,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  swipeToSlide: true
};

const NewsList = () => {
  return (
    <Container fluid className="newslist-section" as="section">

      <Row className="pt-2 pb-3 mt-3 mb-4 mx-4">
        <Col xs={12} lg={2} className="section-header my-3 pl-5 px-2 pb-4" as="header">
          <h3>PAST EVENTS</h3>
        </Col>

        <Col xs={12} lg={10} className="my-3 my-lg-5 card-container px-5 pt-1 pb-2">
          <Slider {...sliderSettings}>

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
        </Col>
      </Row>

    </Container>
  );
};

export default NewsList;
