import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./WebDesing.css";

const WebDesign = () => {
  return (
    <Container className="WebDesign">
      <Row>
        <Col md={3}>
          <Card className='A11'>
          
              <Card.Title>Responsibilities of our position</Card.Title>
              <ul>
                <li>Choosing eye-catching colour palettes that also allow for legible fonts</li>
                <li>Using colours, fonts, and layout to reflect a brand's identity</li>
                <li>Creating a structural map for the website to allow easy navigation</li>
                <li>Adding photos, logos, text, movies, apps, and other content</li>
              </ul>
            
          </Card>
        </Col>
        <Col md={5}>
          <h2>Plan NextGen Webdesign with us</h2>
          <p>
          If you want to increase the efficiency of your web design process, having a ready source of web design inspiration is a wonderful place to start. Web design determines the purpose of a website or webpage and ensures that all potential visitors can easily access it and revisit again.
          </p>
          <p>
          Organizing text, images, font and excellent choice layout leads to succession of pages, as we integrate interactive components with dynamic web applications to fullfil user friendly designs.
          </p>
          <p>Creating Only one of the websites and pages that are optimised for both desktop and mobile usage.</p>
        </Col>
        <Col md={3}>
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/webdesign-1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/webdesign-1.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/webdesign-1.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default WebDesign;
