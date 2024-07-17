import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AndroidandIOS.css";

const AndroidandIOS = () => {
  return (
    <Container className="AndroidandIOS">
      <Row>
        <Col md={3}>
         
            <Card className='A6'>
              <Card.Title>Android and IOS</Card.Title>
              <ul>
                <li>Develop robust mobile applications for both Android and iOS platforms.</li>
                <li> Deliver intuitive and engaging user experiences.</li>
                <li>Leverage the latest tools and technologies for superior app performance.</li>
              </ul>
          
          </Card>
        </Col>
        <Col md={6}>
          <h2>Android and IOS</h2>
          <p>
          Our team excels in creating high-quality mobile applications tailored for both Android and iOS platforms. By using a cross-platform development approach, we ensure consistency and performance, saving time and resources while providing seamless experiences across devices.
          </p>
          <p>
          We prioritize user experience in every app we develop. Through meticulous research and design, we craft applications that are not only visually appealing but also intuitive and easy to navigate. Our goal is to create engaging experiences that keep users coming back.
          </p>

          <p>Staying ahead of the technological curve is crucial in mobile app development. We utilize the latest development tools and frameworks to build applications that are fast, secure, and scalable. From AI integration to cloud services, we ensure your app is equipped with advanced functionalities that meet modern user expectations.</p>
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

export default AndroidandIOS;
