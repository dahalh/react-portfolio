import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../Title/Title";

export const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Skills" />
            <div className="skill-list mb-5 d-flex justify-content-between fw-bold text-center flex-wrap">
              <span className="text-info">
                <i className="fab fa-react d-block"></i> REACT
              </span>
              <span className="text-primary">
                <i className="fab fa-html5 text-primary d-block"></i> HTML5
              </span>
              <span className="text-danger">
                <i className="fab fa-css3-alt text-danger d-block"></i> CSS3
              </span>
              <span className="text-warning">
                <i className="fab fa-js text-warning d-block"></i> JavaScript
              </span>
              <span className="text-primary">
                <i class="fa-brands fa-bootstrap text-primary d-block"></i>
                Bootstrap
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
