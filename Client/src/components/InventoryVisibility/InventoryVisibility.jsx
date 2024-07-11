import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './InventoryVisibility.css';

const InventoryVisibility = () => {
  return (
    <Container fluid className="inventory-visibility">
      <Row>
        <Col md={6} xs={12} className="text-column">
          <h1>Enhancing Business <br/> Efficiency with <br/> Advanced Web <br/> and AI Solutions</h1>
          <br/>
          <br/>
          <p>
            A leading retail company uses our web development and AI solutions to streamline operations and enhance customer experience.
          </p>
          <br/>
          <p><b>NovaByte</b> leverages our advanced services to create a seamless online platform, significantly boosting efficiency and satisfaction.</p>
        </Col>
        <Col md={6} xs={12} className="image-column">
          <img src="/image9.jpg" className="img-fluid" alt="Inventory Visibility" />
        </Col>
      </Row>
    </Container>
  );
};

export default InventoryVisibility;
