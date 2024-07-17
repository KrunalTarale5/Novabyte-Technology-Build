import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ItServices.css";

const ItService = () => {
  return (
    <Container className="ItService">
      <Row>
        <Col md={3}>
          <Card className='A9'>
           
              <Card.Title>Consultanting Approach</Card.Title>
              <ul>
                <li>We Listen to Your Needs in Order to Plan an IT Strategy</li>
                <li>We will match the tactics to your goals</li>
                <li>Develop a solution tailored to your company</li>
                <li>We work and bring measurable results</li>
                <li>We Try to address all of your IT problems in-house</li>
              </ul>
          
          </Card>
        </Col>
        <Col md={5}>
          <h2>With our IT consulting services,</h2>
          <p>
          We can assist you in developing and implementing a clear and strategic IT roadmap with priorities that are directly tied to business objectives. We'll meet with your team one-on-one to learn about company objectives, business processes,and present information system capabilities.
          </p>
          <p>
          Whether you need project assistance, ongoing maintenance assistance, IT investment guidance, or enterprise system installation guidance. We help you break away from traditional approaches to IT planning and provide the key IT consulting services you need to guide your technology infrastructure in the right direction.
          </p>
        </Col>
        <Col md={3}>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/it-consulting-1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/it-consulting-2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/it-consulting-3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ItService;
