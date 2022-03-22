import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../Title/Title";
import imgProfile from "../../assets/me.jpg";

export const About = () => {
  return (
    <section id="about-me">
      <SectionTitle title="About Me" />
      <Container>
        <Row>
          <Col className="about-me-img">
            <img
              src={imgProfile}
              alt="me"
              className="text-center"
              width="60%"
            />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, laborum error! Sint vitae nemo, tempora corrupti
              quae odit cupiditate praesentium voluptas repellat est cum
              architecto laboriosam repellendus perspiciatis laborum harum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              laborum qui, nisi iure dolor inventore eos id doloribus deserunt
              ea amet animi, aut esse molestias.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
