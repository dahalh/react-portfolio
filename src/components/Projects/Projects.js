import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SectionTitle } from "../Title/Title";
import p1 from "../../assets/contact.png";
import p2 from "../../assets/calculator.png";
import p3 from "../../assets/not-to-do.png";

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
            <h1>Prank Calculator</h1>
            <div className="links">
              <a
                href="https://github.com/dahalh/prank-calculator"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://dahalh.github.io/prank-calculator/"
                target="_blank"
              >
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <p className="project-p"> Tech: HTML, CSS, JavaScript</p>
            <p className="project-p">
              This project is a fun project, a prank calculator. The calculator
              works correctly 90% of the time, the other 10% the calculator
              gives incorrect answers, allowing you to make your friends look
              like fools!
            </p>
            {/* <p>Add how you did this</p> */}
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
          <Col md="6" className="mt-2 mt-md-0">
            <h1>Contact List App</h1>
            <div className="links">
              <a href="https://github.com/dahalh/contact-list" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://dahalh.github.io/contact-list/" target="_blank">
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <p className="project-p">Tech: HTML, CSS, JavaScript</p>
            <p className="project-p">
              This project is a contact list website integrated using a random
              API. The contacts can be filtered by specifying gender and using
              the search bar.
            </p>
            {/* <p>Add how you did this</p> */}
          </Col>
        </Row>
        {/* Project 3 */}
        <Row className="mt-5 py-5">
          <Col md="6">
            <img
              src={p3}
              alt="Project Name"
              className="img-thumbnail"
              width="100%"
            />
          </Col>
          <Col md="6">
            <h1>Time Management Tracker</h1>
            <div className="links">
              <a
                href="https://github.com/dahalh/time-management"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://dahalh.github.io/time-management/"
                target="_blank"
              >
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <p className="project-p">Tech: HTML, CSS, JavaScript</p>
            <p className="project-p">
              This project is a time management tracker. You can enter tasks and
              move them between good tasks and bad tasks, allowing you to see
              how much time you have saved and how much time you would have lost
              if you hadn't used the tracker.
            </p>
            {/* <p>Add how you did this</p> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
