import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BaseLayout from "../../layouts/baseLayout";

export default function MainPage() {
  const [arabicText, setArabicText] = useState<string>("");
  const [transliteratedText, setTransliteratedText] = useState<string>("");

  useEffect(() => {});

  const getTransliteratedSentence = async (arabicText: string) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://arabize-backend-latest.onrender.com/",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          arabicText: arabicText,
        },
      });

      console.log(`getTransliteration - response`);
      console.log(response);

      if (response && response.data) {
        setTransliteratedText(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <BaseLayout>
      <Row className="text-center m-5">
        <div>{"Sample text: أهلاً وسهلاً يا غالي"}</div>
      </Row>
      <Row className="text-center m-5">
        <div>{transliteratedText}</div>
      </Row>
      <Row className="text-center m-5">
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Arabic text"
              value={arabicText}
              onChange={(e) => {
                setArabicText(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={() => getTransliteratedSentence(arabicText)}
          >
            Submit
          </Button>
        </Form>
      </Row>
    </BaseLayout>
  );
}
