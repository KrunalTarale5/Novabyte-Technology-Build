import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Devops.css";

const Devops = () => {
  return (
    <Container className="devops">
      <Row>
      <Col md={4}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/public/devops-1.1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/public/devOps-2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/public/image-1.jpeg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={5}>
          <h2>DevOps transforming</h2>
          <p>
          DevOps engineers have taken over the world, they drive change in IT culture, focusing on rapid IT service delivery. They drive continuous deployment and infrastructure improvements through the adoption of agile.
          </p>
          <p>
          Our DevOps-oriented engineers live at the intersection of IT operations and software development understanding much of what it takes to maintain IT infrastructure while also being able to write code and deploy new services.
          </p>
          <p>While any business experiencing this transformation is likely to adopt agile, Scrum, Lean, and other methodologies, agile transformation involves much more than simply altering how software is developed.</p>
          <p>Here, we focus on end to end pipeline, by driving collaboration between development, operations and testing.</p>
          <p>DevOps engineers have emerged as pivotal figures in modern IT landscapes, spearheading a cultural shift towards rapid and efficient IT service delivery. Their role transcends traditional boundaries by fostering continuous deployment and enhancing infrastructure through agile practices.</p>
          <p>At the core of DevOps philosophy lies a unique blend of IT operations and software development expertise. These professionals possess a deep understanding of maintaining robust IT infrastructures while also possessing coding proficiency to deploy cutting-edge services and applications.</p>
          
        </Col>
        <Col md={3}>
          <Card className='A4'>
            
              <Card.Title>Empower Team with DevOps</Card.Title>
              <ul>
                <li>Applications and solutions are deployed on a cloud network</li>
                <li>Applications and solutions are deployed on a hybrid network</li>
                <li>Applications and solutions are deployed on a docker & kubernatese</li>
                <li>Pipeline are automated and controlled using APIs, web portals.</li>
              </ul>
           
          </Card>
        </Col>
       
      </Row>
    </Container>
  );
};

export default Devops;
