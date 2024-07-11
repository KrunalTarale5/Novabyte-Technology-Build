import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import { Container, Row, Col } from 'react-bootstrap';

const ProductsPage = () => {
  const [selectedKey, setSelectedKey] = useState('networking');

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-light sidebar">
          <Sidebar onSelect={(key) => setSelectedKey(key)} />
        </Col>
        <Col md={10}>
          <Content selectedKey={selectedKey} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
