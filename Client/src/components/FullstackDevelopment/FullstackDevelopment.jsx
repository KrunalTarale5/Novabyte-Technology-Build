import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FullstackDevelopment.css";

const FullstackDevelopment = () => {
  return (
    <Container className="fullstack-development">
      <Row>
        <Col md={3}>
          <Card className='A1'>
            
              <Card.Title>Fullstack Solutions</Card.Title>
              <ul>
                <li>Unparalleled web and app development solutions</li>
                <li>Expertise to build feature-rich solutions</li>
                <li>End-to-end solutions in front-end and back-end development</li>
              </ul>
           
          </Card>
        </Col>
        <Col md={5}>
          <h2>Full-stack Migration and SOS Designs</h2>
          <p>
            Software Solutions helps companies meet their business needs through mobile application development, web development, and other software development projects. Our full stack developers have over a decade of experience building scalable solutions with frontend and backend frameworks and database management.
          </p>
          <p>
            Every business wants to set the pace for faster growth, and with our bundled development services, you can achieve that. Our fullstack developers have the insight and experience needed to build full-fledged apps for your business.
          </p>
        </Col>
        <Col md={3}>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/fullstack-1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/fullstack-2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/fullstack-3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default FullstackDevelopment;
