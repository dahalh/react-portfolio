import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SectionTitle } from "../Title/Title";
import p1 from "../../assets/contact.png";
import p2 from "../../assets/calculator.png";

export const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Projects"></SectionTitle>
          </Col>
        </Row>

        {/* project 1 */}
        <Row className="mt-5 py-5">
          <Col md="6">
            <img
              src={p2}
              alt="Project Name"
              className="img-thumbnail"
              width="100%"
            />
          </Col>
          <Col md="6">
            <h2>Prank Calculator</h2>
            <div className="links">
              <a href="https://github.com/dahalh/prank-calculator">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://dahalh.github.io/prank-calculator/">
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <p>Tech: HTML, CSS, JavaScript</p>
            <p>
              This project is a fun project, a prank calculator. The calculator
              works correctly 90% of the time, the other 10% the calculator
              gives incorrect answers, allowing you to make your friends look
              like fools!
            </p>
            <p>Add how you did this</p>
          </Col>
        </Row>
        {/* project 2 */}
        <Row className="py-5">
          <Col md="6" className="order-md-2">
            <img
              src={p1}
              alt="Project Name"
              className="img-thumbnail"
              width="100%"
            />
          </Col>
          <Col md="6" classNmae="mt-2 mt-md-0">
            <h2>Contact List App</h2>
            <div className="links">
              <a href="https://github.com/dahalh/prank-calculator">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://dahalh.github.io/prank-calculator/">
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <p>Tech: HTML, CSS, JavaScript</p>
            <p>
              This project is a fun project, a prank calculator. The calculator
              works correctly 90% of the time, the other 10% the calculator
              gives incorrect answers, allowing you to make your friends look
              like fools!
            </p>
            <p>Add how you did this</p>
          </Col>
        </Row>
        {/* Project 3 */}
        <Row className="mt-5 py-5">
          <Col md="6">
            <img
              src={p2}
              alt="Project Name"
              className="img-thumbnail"
              width="100%"
            />
          </Col>
          <Col md="6">
            <h2>Prank Calculator</h2>
            <div className="links">
              <a href="https://github.com/dahalh/prank-calculator">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://dahalh.github.io/prank-calculator/">
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <p>Tech: HTML, CSS, JavaScript</p>
            <p>
              This project is a fun project, a prank calculator. The calculator
              works correctly 90% of the time, the other 10% the calculator
              gives incorrect answers, allowing you to make your friends look
              like fools!
            </p>
            <p>Add how you did this</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
