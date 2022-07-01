import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const GoBack = ({ url }) => {
  return (
    <Link to={url} style={{ textDecoration: "none" }}>
      <Button variant="outline-primary mb-4">
        <FontAwesomeIcon icon={faArrowLeft} className="me-1" /> Go back
      </Button>
    </Link>
  );
};

export default GoBack;
