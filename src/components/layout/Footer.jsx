// src/components/layout/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row className="justify-content-center"> {/* Esta clase centrará las columnas horizontalmente */}
          {/* Columna para la información principal, centrada */}
          <Col lg={6} md={12} className="mb-4 mb-md-0 text-center">
            <h5 className="text-uppercase">Pie de Página</h5>
            <p>
              Matías gay. Que va a sortear el chancho?
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;