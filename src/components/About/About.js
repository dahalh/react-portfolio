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
            <p className="about-p">
              My Name is Himanshu Dahal. I am recent graduate, having graduated
              from Western Sydney University in mid 2021. I am currently a React
              | Node | MongoDB | Full Stack Developer with MERN in training at
              Dented Code.
            </p>
            <p className="about-p">
              You can see all the projects I have completed and their links in
              this page. If you have any questions, please get in contact with
              me. Looking forward to hearing from you!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
