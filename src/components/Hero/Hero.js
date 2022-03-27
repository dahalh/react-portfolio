import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Header } from "../Layout/Header";
import "./Hero.css";
import me from "../../assets/me.jpg";

export const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <Container>
        <Row className="mt-5 pb-3">
          <Col md="5" className="text-center order-md-2 mb-5 pt-3">
            <img src={me} width="50%" alt="me" />
          </Col>
          <Col md="7" className="mt-1">
            <div className="mb-2 pt-3 fs-2">Hi I'm Himanshu Dahal</div>
            <h2>👨🏽‍💻Full-Stack MERN Developer</h2>
            <p className="mt-5 mb-2 fs-5">
              React | Node | MongoDB | Full Stack Developer with MERN, currently
              in training at Dented Code.
            </p>
            {/* <button className="btn btn-success">
              Download Resume <i className="fas fa-cloud-download-alt"></i>
            </button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
