import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ServerSupport.css";

const ServerSupport = () => {
  return (
    <Container className="ServerSupport ">
      <Row>
        <Col md={3}>
          <Card className='A10'>
           
              <Card.Title>Server Support Services</Card.Title>
              <ul>
                <li>24/7 Support from Expert Technicians/Engineers</li>
                <li>Regular Maintenance</li>
                <li>Troubleshooting Systems</li>
                <li>Data Backup</li>
                <li>Improved advancements in support</li>
              </ul>
            
          </Card>
        </Col>
        <Col md={5}>
          <h2>Regular Maintenance & Server support</h2>
          <p>
          Servers are the lifeblood of any business. This is where our critical information is stored and accessed. Our computer network systems will run more efficiently and reliably if we have a Server Support system on hand.
          </p>
          <p>
          If our server goes down, it affects our entire network, from business's day-to-day operations to private and sensitive data and information. That's why it's so important to keep servers and workstations up and running, as well as our networks secure.
          </p>
          <p>As new technology emerges, software and network systems are always expanding and changing. We must upgrade and remodel your current software on a regular basis to keep IT systems aligned with new technologies.</p>
        </Col>
        <Col md={3}>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/public/server-support-1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/public/server-support-2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/public/server-support-3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ServerSupport ;
