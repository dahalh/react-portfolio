import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <Row>
          <Col className="d-flex justify-content-around fs-1">
            <a target="_blank" href="mailto@dahalh@outlook.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/himanshudahal/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/dahalh">
              <i className="fab fa-github text-dark"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
