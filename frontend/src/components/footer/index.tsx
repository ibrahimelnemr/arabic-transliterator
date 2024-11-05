import React from "react";
import { Row } from "react-bootstrap";
import classes from "./style.module.scss";

export default function Footer() {
  return (
    <div className={`${classes.footer} border col-12 bg-light`}>
      <div className="text-center p-2 m-2 fw-lighter fs-5">
        Built with React and Boostrap
      </div>
    </div>
  );
}
