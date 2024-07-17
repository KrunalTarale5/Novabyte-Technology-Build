import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Hosting.css";

const Hosting = () => {
  return (
    <Container className="Hosting">
      <Row>
        <Col md={3}>
          <Card className='A8'>
            
              <Card.Title>Cloud technology benifits</Card.Title>
              <ul>
                <li>Reliability</li>
                <li>Scalability</li>
                <li>Versatility</li>
                <li>Reduced upfront capital costs</li>
                <li>Compliance and operational support</li>
              </ul>
           
          </Card>
        </Col>
        <Col md={5}>
          <h2>Hosting transformation with Cloud</h2>
          <p>
          Rather of hosting website or webapp on a single machine, the cloud computing allows us to distribute data among several, networked servers spread across a large geographical area. The word cloud comes from the fact that these servers exist exclusively in a virtual environment.
          </p>
          <p>
          Because cloud hosting makes use of the computational power of multiple machines, we will not only have far more potential than traditional hosting, but we will also have access to the services other machines provide.
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

export default Hosting;
