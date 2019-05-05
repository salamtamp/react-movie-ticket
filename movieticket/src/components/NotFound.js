import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Container>
    <Row style={{ paddingTop: 40, textAlign: 'center' }}>
      <Col md={12}>
        <h2>Content Not Found</h2>
        <Link to="/">Back to homepage</Link>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
