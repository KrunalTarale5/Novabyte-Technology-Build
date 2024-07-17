import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./WebDevelopment.css";

const WebDevelopment = () => {
  return (
    <Container className="WebDevelopment">
      <Row>
        <Col md={3}>
          <Card className='A12'>
          
              <Card.Title>Results-oriented development</Card.Title>
              <ul>
                <li>Build dynamic data-driven apps using multiple technologies</li>
                <li>Rapid project execution with diverse growth opportunities</li>
                <li>Familiar with frontends, backends and DevOps</li>
                <li>Knowledge of maintenance and updates</li>
              </ul>
           
          </Card>
        </Col>
        <Col md={5}>
          <h2>Unmatched web application development</h2>
          <p>
          Are you a digital agency services or software product company looking for a partner in a highly technological and evolving field of web development? Alzohar is perfect for you.
          </p>
          <p>
          We have an excellent team of web application developers who can create innovative and powerful website developments of any complexity.
          </p>
          <p>Full-stack developers are software experts in front-end and back-end web development. They have a deep understanding of potential programming languages ​​and can help bring MVP products back automatically. Tech entrepreneurs usually need to hire a full-stack developer to help prepare the MVP when building an API or website.</p>
        </Col>
        <Col md={3}>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/web-development-1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/web-development-2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/web-development-3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default WebDevelopment;
