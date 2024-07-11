import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './TechnologyOverview.css';

const TechnologyOverview = () => {
  return (
    <Container fluid className="technology-overview">
      <Row>
        <Col xs={12} md={6} className="d-flex ">
          <div className="text-column">
            <h1>Browse our technology</h1>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className=" mt-4">
          <p>
          From custom web development to innovative AI solutions and mobile app development, find the perfect solution to elevate your business.
          </p>

            <li><b>Web Development:</b>Create stunning, responsive websites tailored to your needs.</li>
            <li><b>AI Solutions:</b>Leverage advanced AI to enhance operations and user experiences</li>
            <li><b>Mobile Development:</b>Build robust Android and iOS applications for your business.</li>
            <li><b>Research and Innovation:</b>Stay ahead with pioneering research and cutting-edge technology.</li>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TechnologyOverview;
