import React from 'react';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';

import bannerImage1 from '../../assets/imagencarrusel1.jpg'; 
import bannerImage2 from '../../assets/imagencarrusel2.jpg'; 

function HeroBanner() {
  return (
    <Carousel fade controls={true} indicators={false}> {/* `fade` para una transición suave, `controls` para flechas, `indicators` para puntos inferiores */}
      
      {/* Primer Item del Carrusel */}
      <Carousel.Item>
        <div className="carousel-background" style={{ backgroundImage: `url(${bannerImage1})` }}>
          <Container className="h-100 d-flex align-items-center">
            <Row className="w-100 align-items-center">
              <Col md={6} className="text-white text-center text-md-start">
                {/* Texto del Banner */}
                <h2 className="display-4 fw-bold">NUEVA</h2>
                <h1 className="display-2 fw-bolder mb-3">CREATINA</h1>
                <h3 className="h4 fw-light mb-4">
                  
                </h3>
                {/* Botón */}
                <Button variant="info" size="lg" className="px-5 py-3 fw-bold">
                  CONSEGUILO
                </Button>
              </Col>
              {/* Espacio para la imagen del producto si no es parte del fondo */}
              <Col md={6}>
                
              </Col>
            </Row>
          </Container>
        </div>
        
        {/* Flechas de navegación del carrusel, si no usas `controls` en <Carousel> */}
        {/* <div className="carousel-nav-arrows">
            <Button variant="light" className="rounded-circle me-2"><span aria-hidden="true">&lt;</span></Button>
            <Button variant="light" className="rounded-circle"><span aria-hidden="true">&gt;</span></Button>
        </div> */}
      </Carousel.Item>

      {/* Segundo Item del Carrusel (puedes duplicar y cambiar el contenido) */}
      <Carousel.Item>
        <div className="carousel-background" style={{ backgroundImage: `url(${bannerImage2})` }}>
          <Container className="h-100 d-flex align-items-center">
            <Row className="w-100 align-items-center">
              <Col md={6} className="text-white text-center text-md-start">
                <h2 className="display-4 fw-bold">DESCUBRE</h2>
                <h1 className="display-2 fw-bolder mb-3">NUEVOS</h1>
                <h3 className="h4 fw-light mb-4">PRODUCTOS </h3>
                <Button variant="info" size="lg" className="px-5 py-3 fw-bold">
                  VER MÁS
                </Button>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default HeroBanner;