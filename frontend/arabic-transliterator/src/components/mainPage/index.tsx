import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function MainPage () {
  const [arabicText, setArabicText] = useState<String>("");
  const title = "Arabic Transliterator";

  useEffect(() => {
    getTransliteratedSentence();
  });

  const getTransliteratedSentence = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/",
        data: {
          message: "request sent",
        },
      });
      console.log(response);

      if (response) {
        setArabicText(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container fluid className="vh-100">
      <Row className="">
        <Col className="text-center m-5 h2 fw-light">{title}</Col>
      </Row>
      <Row className="">
        <Col className="text-center m-5">
          <div>{JSON.stringify(arabicText)}</div>
        </Col>
      </Row>
      <Row className="text-center">
        <Col className="text-center m-5">
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <Button variant="primary" onClick={() => {}}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
