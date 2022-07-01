import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import "./styles.css";
import img1 from "../../../assets/about-section/1.webp";
import img2 from "../../../assets/about-section/2.webp";
import img3 from "../../../assets/about-section/3.webp";
import img4 from "../../../assets/about-section/4.webp";
import img5 from "../../../assets/about-section/5.webp";

const About = () => {
  return (
    <>
      <Container className="about-us-section py-2 mt-2 mb-1" as="section">
        {/*<Row className="pt-2 pb-3 pb-sm-4 mt-3 mb-4 mx-0">*/}
        {/*  <Col xs={12} className="section-header mt-4 mb-2 pl-0 px-2 px-lg-4 pb-0 pl-xl-5" as="header">*/}
        {/*    <h3>ABOUT US</h3>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        <Row>
          <Col
            xs={12}
            md={7}
            className="px-2 ps-xl-4 pb-1 pb-lg-3 align-self-center"
          >
            <section
              className="about-us-banner px-4 px-xl-5 py-xl-2"
              id="parallax-images"
            >
              <Parallax
                className="parallax-container"
                y={[80, 30]}
                tagOuter="figure"
              >
                <Image id="img-1" alt="" src={img3} />
              </Parallax>
              {/*<Parallax className="parallax-container" y={[275, 250]} x={[25, 25]} tagOuter="figure">*/}
              {/*  <Image width="250px"*/}
              {/*         id="img-6"*/}
              {/*         src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/234927715_6305335529478366_4606209582635427983_n.png?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=Oh71SrO2o4YAX9qBYiw&_nc_ht=scontent.fcmb1-2.fna&oh=c236b867108c0ca8f02f340b1b3f900e&oe=61877F6B"/>*/}
              {/*</Parallax>*/}
              <Parallax
                className="parallax-container"
                y={[70, 10]}
                x={[130, 130]}
                tagOuter="figure"
              >
                <Image id="img-2" alt="" src={img2} />
              </Parallax>
              <Parallax
                className="parallax-container"
                y={[140, 60]}
                x={[75, 75]}
                tagOuter="figure"
              >
                <Image id="img-3" alt="" src={img1} />
              </Parallax>
              <Parallax
                className="parallax-container"
                y={[210, 150]}
                x={[140, 140]}
                tagOuter="figure"
              >
                <Image id="img-4" alt="" src={img4} />
              </Parallax>
              <Parallax
                className="parallax-container"
                y={[220, 150]}
                x={[35, 35]}
                tagOuter="figure"
              >
                <Image id="img-5" alt="" src={img5} />
              </Parallax>
            </section>
          </Col>

          <Col xs={12} md={5} className="px-3 pe-lg-4">
            <div className="section-header">
              <h3>ABOUT US</h3>
              <hr />
            </div>
            <div className="py-1 pb-0 py-md-2 py-lg-3 mt-3 mb-lg-4">
              <p>
                The IEEE student branch of University of Colombo School of
                Computing was established in 2011 and has achieved great success
                during the past few years. The student branch has been formed
                with the participation and contribution of all four batches of
                University of Colombo School of Computing and it has organized
                many activities to enhance professional development of the
                students.
              </p>
              <br />
              <p>
                Along with the technological experience and knowledge,
                personality development skills such as organization, leadership,
                interaction can be gained by engaging with the activities
                organized by the student branch. These activities are done
                following the core purpose of IEEE - to serve the humanity
                through technological innovations.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
