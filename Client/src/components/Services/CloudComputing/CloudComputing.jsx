import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CloudComputing.css";

const CloudComputing = () => {
  return (
    <Container className="CloudComputing">
      <Row>
        <Col md={3}>
         
            <Card className='A7'>
              <Card.Title>Cloud Computing Services</Card.Title>
              <ul>
                <li>Easily scale your resources up or down based on demand.</li>
                <li>Reduce IT costs with pay-as-you-go pricing models.</li>
                <li>Robust security protocols to protect your data.</li>
              </ul>
           
          </Card>
        </Col>
        <Col md={5}>
          <h2>Full-stack Migration and SOS Designs</h2>
          <p>
          Our cloud computing services provide unparalleled scalability, allowing businesses to adjust their resources in real-time according to their needs. Whether you're experiencing a sudden surge in traffic or preparing for a major project, our cloud solutions ensure that you have the necessary infrastructure to support your operations without any delays or disruptions.
          </p>
          <p>
          By adopting our cloud computing services, you can significantly reduce your IT expenditures. Our pay-as-you-go pricing model eliminates the need for substantial upfront investments in hardware and software. You only pay for the resources you use, optimizing your budget allocation and improving your overall financial efficiency.
          </p>
          <p>Security is a top priority in our cloud computing services. We implement advanced security measures, including encryption, firewalls, and regular security audits, to safeguard your data from threats. Our multi-layered security approach ensures that your sensitive information is protected against unauthorized access, providing you with peace of mind and allowing you to focus on your core business activities.</p>
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

export default CloudComputing;
