import React from "react";
import { Col, Container, Nav, Navbar, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCheck,
  faHome,
  faInfoCircle,
  faPhoneAlt,
  faTasks,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import ucscieee_logo from "../../../assets/ieeeucsc.webp";
import ieee_logo from "../../../assets/logo-ieee.svg";
import "./styles.css";

const NavbarLogos = () => {
  return (
    <Navbar
      bg="light"
      fixed="top"
      className="navbar-logos m-0 p-0 pb-1 pt-lg-2 pb-lg-2"
      style={{ height: "85px" }}
    >
      <Container>
        <Row xs={12} className="w-100 mx-0 my-1 my-lg-0">
          <Col xs={12}>
            <Navbar.Brand className="pt-1 pb-2 pt-lg-0 pb-lg-1 d-flex justify-content-between w-100">
              <NavLink to="/" className="d-flex align-items-center">
                <img
                  src={ucscieee_logo}
                  alt="IEEE Student Branch of UCSC Logo"
                  height="50px"
                  className="pt-2 pt-lg-0"
                />
              </NavLink>
              <a href="https://ieee.org" rel="noreferrer" target="_blank">
                <img
                  src={ieee_logo}
                  alt="IEEE Logo"
                  height="60px"
                  className="py-4 py-md-3 pe-2"
                />
              </a>
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

const NavbarLinks = () => {
  return (
    <Navbar
      fixed="top"
      style={{ top: "85px" }}
      variant="dark"
      expand="lg"
      className="navbar-links"
    >
      <Container>
        <Row xs={12} className="w-100 m-0 p-0">
          <Col
            xs={12}
            className="justify-content-end justify-content-md-center"
          >
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="mt-1 py-0 px-2"
            >
              <Hamburger rounded size={24} label="Hamburger Menu" />
            </Navbar.Toggle>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="m-auto pb-1 py-lg-0"
            >
              <Nav className="me-auto m-lg-auto">
                <Nav.Item className="my-1 my-lg-0">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={100}
                    className="nav-link"
                    activeClass="active"
                  >
                    <FontAwesomeIcon icon={faHome} className="me-2 me-lg-0" />
                    &ensp;Home
                  </Link>
                </Nav.Item>
                <Nav.Item className="my-1 my-lg-0">
                  <Link
                    to="about-us"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={100}
                    className="nav-link"
                    activeClass="active"
                  >
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="me-2 me-lg-0"
                    />
                    &ensp;About Us
                  </Link>
                </Nav.Item>
                <Nav.Item className="my-1 my-lg-0">
                  <Link
                    to="what-we-do"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={100}
                    className="nav-link"
                    activeClass="active"
                  >
                    <FontAwesomeIcon icon={faCheck} className="me-2 me-lg-0" />
                    &ensp;What We Do
                  </Link>
                </Nav.Item>
                <Nav.Item className="my-1 my-lg-0">
                  <Link
                    to="timeline"
                    spy={true}
                    smooth={true}
                    offset={-180}
                    duration={100}
                    className="nav-link"
                    activeClass="active"
                  >
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="me-2 me-lg-0"
                    />
                    &ensp;Timeline
                  </Link>
                </Nav.Item>
                <Nav.Item className="my-1 my-lg-0">
                  <Link
                    to="past-events"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={100}
                    className="nav-link"
                    activeClass="active"
                  >
                    <FontAwesomeIcon icon={faTasks} className="me-2 me-lg-0" />
                    &ensp;Past Events
                  </Link>
                </Nav.Item>
                <NavDropdown
                  title={
                    <>
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="me-2 me-lg-0"
                      />
                      &ensp;Our Team
                    </>
                  }
                >
                  <NavDropdown.Item as="div" className="my-1 my-lg-0">
                    <Link
                      to="team"
                      spy={true}
                      smooth={true}
                      offset={-130}
                      duration={100}
                      className="nav-link"
                      activeClass="active"
                    >
                      Current Team
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div" className="my-1 my-lg-0">
                    <RouterLink
                      className="nav-link"
                      to="/previous-officers"
                      onClick={() =>
                        window.localStorage.setItem(
                          "scrollYPosition",
                          window.scrollY.toString()
                        )
                      }
                    >
                      Previous Officers
                    </RouterLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item className="my-1 my-lg-0">
                  <Link
                    to="contact-us"
                    spy={true}
                    smooth={true}
                    offset={-110}
                    duration={100}
                    className="nav-link"
                    activeClass="active"
                  >
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="me-2 me-lg-0"
                    />
                    &ensp;Contact Us
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

const TopNavbar = (props) => {
  const { showLinks } = props;
  return (
    <>
      <NavbarLogos />
      {showLinks && <NavbarLinks />}
    </>
  );
};

export default TopNavbar;
