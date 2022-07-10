import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

import "./styles.css";

const Button = ({ children, onClick, className }) => {
  return (
    <BootstrapButton
      className={className}
      variant="outline-primary"
      onClick={onClick}
    >
      {children}
    </BootstrapButton>
  );
};

export default Button;
