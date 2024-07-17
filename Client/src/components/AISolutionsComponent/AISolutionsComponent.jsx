import React, { useState } from 'react';
import { Button, Container, Row, Col, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AISolutionsComponent.css';

const AISolutionsComponent = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h2>Put AI into action</h2>
            <p>Artificial intelligence (AI) is the transformative technology of our times. It helps all of us make our businesses faster, stronger and more effective. But to trust AI technology, you can't achieve it by tossing money at the largest or flashiest AI models. You can achieve it by:</p>
            <ul>
              <li>Using the right AI and training it on the right data sets at the right time.</li>
              <li>Running AI models from anywhere with secure access to your data wherever it is stored.</li>
              <li>Prioritizing safety, control and compliance with a holistic AI governance approach.</li>
              <li>Using AI built on ethical principles, which are designed for the many, not the few.</li>
              <li>Extending your team's capabilities to reach new heights of productivity and performance.</li>
            </ul>
          </div>
        );
      case 'solutions':
        return (
          <div>
            <h2>AI solutions</h2>
            <p>IBM offers AI solutions to help you build the future of your business today. These solutions include IBM watsonx™, the data and AI platform with a set of AI assistants, the deep scientific expertise of IBM Research® and the teams of expert consultants ready to help you scale responsible AI across the enterprise.</p>
            <Row>
              <Col>
                <Card className="ai-card">
                  <Card.Img  src="/Ai.jpeg" />
                  <div>
                    <Card.Title>Build, train and tune AI</Card.Title>
                    <Card.Text>Start with IBM® watsonx.ai™, our studio for foundation models and machine learning and engage with expert consultants to drive real business transformation with AI technology.</Card.Text>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="ai-card">
                  <Card.Img variant="top" src="/Ai.jpeg" />
                  <div>
                    <Card.Title>Optimize your data for AI</Card.Title>
                    <Card.Text>Create a strategy with IBM® watsonx.data™ to construct your ideal data estate, which supports the entire data science lifecycle and enables the scaling of AI workloads with a fit-for-purpose data store.</Card.Text>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="ai-card">
                  <Card.Img variant="top" src="/Ai.jpeg" />
                  <div>
                    <Card.Title>Mitigate risk with AI governance</Card.Title>
                    <Card.Text>With IBM® watsonx.governance™, you can direct, manage and monitor your organization’s AI projects by integrating responsible AI workflows for generative AI and machine learning throughout your business operations.</Card.Text>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        );
      case 'useCases':
        return (
          <div>
            <h2>AI use cases</h2>
            <p>IBM can help you apply AI to a wide range of use cases. From natural language processing to generative AI to machine learning, by using IBM’s AI capabilities to:</p>
            <ul>
              <li>Achieve high-performance automation for tedious work.</li>
              <li>Optimize business processes.</li>
              <li>Streamline data management.</li>
              <li>Facilitate better decision-making.</li>
              <li>With the right AI tools, you can build a competitive advantage in customer service, boost AI-powered productivity and modernize applications across industries, including financial services, healthcare, supply chain and more.</li>
            </ul>
          </div>
        );

        case 'caseStudies':
            return(
                <div>
                    <h2>Case studies</h2>
                    <p>See how clients in the business environment are using AI-powered solutions that collaborate with IBM.</p>
                </div>
            );

         case 'resources' :
            return(
                <div>
                    <h2>Accelerate your journey to AI</h2>
                    <p>With the right AI tools, you can build a competitive advantage in customer service, boost AI-powered productivity and modernize applications across industries, including financial services, healthcare, supply chain and more.</p>
                </div>
            ) ;

          case 'nextSteps':  
          return(
            <div>
                <h2>Start with a generative AI strategy session for watsonx</h2>
                <p>Discover where generative AI can have the most significant real-world impact and how watsonx can elevate your AI investments.</p>
                <Button variant="primary" className="mr-2 S2">Subscribe to our AI newsletter</Button>
                <Button variant="secondary">Explore watsonx</Button>
            </div>
          )
      default:
        return null;
    }
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1><b>Artificial intelligence (AI) solutions</b></h1>
          <p>Build the future of your business with AI solutions that you can trust</p>
         <div className='mt-5'>
         <Button variant="primary" className="mr-2 S2">Subscribe to our AI newsletter</Button>
         <Button variant="secondary">Explore watsonx</Button>
         </div>
        </Col>
        <Col md={4}>
          <img src="/Ai.jpeg" alt="AI" className="img-fluid" />
        </Col>
      </Row>
      <Row className="mt-4 S3">
        <Col md={3}>
          <Nav defaultActiveKey="overview" className="flex-column" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Link eventKey="overview">Overview</Nav.Link>
            <Nav.Link eventKey="solutions">Solutions</Nav.Link>
            <Nav.Link eventKey="useCases">Use Cases</Nav.Link>
            <Nav.Link eventKey="caseStudies">Case Studies</Nav.Link>
            <Nav.Link eventKey="resources">Resources</Nav.Link>
            <Nav.Link eventKey="nextSteps">Next Steps</Nav.Link>
          </Nav>
        </Col>
        
        <Col md={9}>
          {renderContent()}
        </Col>
      </Row>
     
    </Container>
  );
};



export default AISolutionsComponent;
