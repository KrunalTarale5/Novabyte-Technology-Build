import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './InsideNovaByte.css';

const InsideNovaByte = () => {
  return (
    <Container fluid className="technology-overview">
      <Row>
        <Col xs={12} md={6} className="d-flex ">
          <div className="text-column">
            <h1>Inside NovaByte</h1>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <div className=" mt-4">
          <p>
          Harnessing advanced technology to solve business challenges and drive innovation. Explore our approach and discover how we make a difference.
          </p>

          <p className='cal1'>About NovaByte <span className="arrow ">→</span></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InsideNovaByte;
