import React, { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";

export default function BasePage({
  children
}: {
  children: ReactNode;
}) {
  return (
    <Row className="p-5 m-0 bg-light g-4">
      {children}
    </Row>
  );
}