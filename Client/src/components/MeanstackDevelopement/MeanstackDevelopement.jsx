import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MeanstackDevelopement.css";

const MeanstackDevelopement = () => {
  return (
    <Container className="meanstack-development">
      <Row>
      <Col md={4}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/public/meanstack-1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/public/meanstack-2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/public/meanstack-3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
       
        <Col md={5}>
          <h2>One of the most prominent Technology Stacks is MEAN Stack.</h2>
          <p>
          MEAN stack will be an open source stack the faster pace appliaction development. When Our goal is to develop and maintain a fasterpace, application with open-source stack that we can rely on this technologicals stack of MongoDD, ExpressJs, Angular And NodeJs.
          </p>
          <p>
          The MEAN stack is an excellent choice for any web development headed for the cloud, especially to its flexibility, consistent language, and scalability.
          </p>
          <p>
          Create scalable applications that are virtualized.Were using a single language through out application to facilitate development.
          </p>
        </Col>
        <Col md={3}>
          <Card className='A2'>
            
              <Card.Title>Mean Stack Architecture</Card.Title>
              <ul>
                <li>Angular JS: Accept requests and show consequences to cease the user</li>
                <li>NodeJS: Handle Client and Server Requests</li>
                <li>Express JS: Make requests to the Database and return a response</li>
                <li>MongoDB: Store and retrieve data.</li>
              </ul>
           
          </Card>
        </Col>
       
      </Row>
    </Container>
  );
};

export default MeanstackDevelopement;
