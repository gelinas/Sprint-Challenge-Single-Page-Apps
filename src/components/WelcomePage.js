import React from "react";
import { Container, Row, Col } from 'reactstrap';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Container>
          <Row>
            <Col xs="12">
              <h1>Welcome to the ultimate fan site!</h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                className="main-img"
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                alt="rick"
              />
            </Col>
          </Row>
        </Container>
      </header>
    </section>
  );
}
