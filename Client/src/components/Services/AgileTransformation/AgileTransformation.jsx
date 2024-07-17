import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AgileTransformation.css";

const AgileTransformation = () => {
  return (
    <Container className="AgileTransformation">
      <Row>
        <Col md={3}>
          <Card className='A5'>
            
              <Card.Title>Empower Agile values</Card.Title>
              <ul>
                <li>Individuals and interactions over processes and tools</li>
                <li>Working software over comprehensive documentation</li>
                <li>Customer collaboration over contract negotiation</li>
                <li>Responding to change over following a plan</li>
              </ul>
            
          </Card>
        </Col>
        <Col md={5}>
          <h2>The process of Agile transforming</h2>
          <p>
          A whole organisation is to adopt flexible practices, reactive approach based on agile principles is known as agile transformation.
          </p>
          <p>
          While any business experiencing this transformation is likely to adopt agile, Scrum, Lean, and other methodologies, agile transformation involves much more than simply altering how software is developed.
          </p>
          <p>Instead, this is a total organization-wide makeover that goes far beyond product creation. The objective is to revitalise the company by fostering a culture of creativity and innovation, empowering people, and eliminating redundant layers of administration.</p>
        </Col>
        <Col md={3}>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/agile-transormation-1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/agile-transormation-2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/agile-transormation-3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default AgileTransformation;
