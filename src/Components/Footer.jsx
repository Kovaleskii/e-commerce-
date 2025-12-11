import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary text-white" style={{ marginTop: 40 }}>
      <Container className="py-4">
        <Row className="align-items-start">
          <Col md={6} className="mb-3">
            <h5 className="mb-2" style={{ fontWeight: 700 }}>Carvaleski Veículos</h5>
            <p className="small text-white-50" style={{ lineHeight: 1.5 }}>
              Levamos você mais longe com confiança e qualidade. Veículos selecionados, atendimento humano e transparência em cada negociação.
            </p>
          </Col>

          <Col md={3} className="mb-3">
            <h6 style={{ fontWeight: 600 }}>Links rápidos</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li><Link to="/produtos" className="text-white-50 text-decoration-none">Produtos</Link></li>
              <li><Link to="/contato" className="text-white-50 text-decoration-none">Contato</Link></li>
            </ul>
          </Col>

          <Col md={3} className="mb-3">
            <h6 style={{ fontWeight: 600 }}>Contato</h6>
            <p className="small mb-1 text-white-50">Telefone: (+55) 11 99999-9999</p>
            <p className="small mb-1 text-white-50">Email: contato@carvaleski.com</p>
            <p className="small text-white-50">Endereço: Rua Exemplo, 123 — Cidade, Estado</p>
          </Col>
        </Row>

        <hr style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

        <div className="d-flex flex-column flex-md-row justify-content-between small text-white-50">
          <div>&copy; {new Date().getFullYear()} CarValeski — Todos os direitos reservados</div>
          <div>Feito com ♥ pela equipe CarValeski</div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
