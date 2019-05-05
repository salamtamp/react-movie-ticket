import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Container>
    <Row style={{ paddingTop: 40, textAlign: 'center' }}>
      <Col md={12}>
        <h4 style={{ paddingTop: 20, paddingBottom: 10 }}>
          Thank you for your purchase
        </h4>
        <h2 style={{ paddingBottom: 30 }}>Your Ticket is #001</h2>
        <Link to="/">Back to home</Link>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
