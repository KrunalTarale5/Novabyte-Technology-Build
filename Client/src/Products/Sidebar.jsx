import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ onSelect }) => {
  return (
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar" onSelect={onSelect}>
      <Nav.Item>
        <Nav.Link eventKey="networking">Networking</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="ai">AI</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
