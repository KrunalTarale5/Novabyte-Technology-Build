import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./QAandAutomation.css";

const QAandAutomation = () => {
  return (
    <Container className="QAandAutomation">
      <Row>
        <Col md={3}>
          <Card className='A3' id='new-card'>
              <Card.Title>QA and Automation Testing</Card.Title>
              <ul>
                <li>Ensure all aspects of your software are thoroughly tested.</li>
                <li>Speed up the testing process with automation.</li>
                <li>Leverage our team's expertise for superior software quality.</li>
              </ul>
          </Card>
        </Col>
        <Col md={5}>
          <h2>QA and Automation Testing</h2>
          <p>
          Our QA and automation testing services provide comprehensive test coverage, ensuring that every aspect of your software is meticulously examined. From functional testing to performance and security testing, we identify and address potential issues before they impact your users, guaranteeing a seamless and reliable user experience.
          </p>
          <p>
          Embrace the efficiency of automated testing to accelerate your development cycle. Our advanced automation tools and frameworks enable continuous testing, allowing for rapid detection and resolution of bugs. This not only reduces time-to-market but also enhances the overall quality of your software by consistently maintaining high testing standards.
          </p>
          <p>Our team of QA professionals brings a wealth of experience and expertise to your projects. With a deep understanding of the latest testing methodologies and best practices, we ensure your software meets the highest standards of quality. Our dedicated QA experts work closely with your development team to implement effective testing strategies, resulting in robust and reliable software solutions.</p>
        </Col>
        <Col md={4}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/automation-test-1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/automation-test-2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/automation-test-3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default QAandAutomation;
