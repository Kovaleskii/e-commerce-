import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, loginWithGoogle, loginWithMicrosoft, logout } = useAuth();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header>
      <Navbar expand="lg" bg="white" className="shadow-sm sticky-top" style={{ padding: '0.6rem 0' }}>
        <Container>
          {/* Logo + Brand */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" style={{ gap: 10, marginRight: 40 }}>
            <img src="/imagens/carvaleski.png" alt="Carvaleski" style={{ height: 50, objectFit: 'contain' }} />
            <div>
              <span style={{ color: '#0077ff', fontWeight: 700, fontSize: 18, display: 'block' }}>Carvaleski</span>
              <span style={{ color: '#666', fontSize: 11, display: 'block', marginTop: -4 }}>Veículos Premium</span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" active={location.pathname === '/'} className="fw-500">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/contato" active={location.pathname === '/contato'} className="fw-500">
                Contato
              </Nav.Link>
            </Nav>

            {/* Search Bar */}
            <Form className="d-flex me-3" style={{ gap: 8 }}>
              <Form.Control
                type="text"
                placeholder="Buscar veículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ borderRadius: 8, border: '1px solid #ddd', fontSize: 14, maxWidth: 200 }}
              />
            </Form>

            {/* Right Actions */}
            <div className="d-flex align-items-center" style={{ gap: 12 }}>
              {/* Cart Icon */}
              <Link to="/carrinho" className="text-decoration-none d-flex align-items-center justify-content-center" style={{ gap: 4 }}>
                <i className="bi bi-cart3" style={{ fontSize: 20, color: '#0077ff' }}></i>
                <span style={{ color: '#333', fontWeight: 600, fontSize: 12 }}>Carrinho</span>
              </Link>

              {/* Auth */}
              {user ? (
                <>
                  <span style={{ fontSize: 12, color: '#666' }} className="d-none d-lg-inline">Olá, {user.displayName?.split(' ')[0] || user.email}</span>
                  <Button variant="outline-secondary" size="sm" onClick={logout} className="fw-600">
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline-primary" size="sm" onClick={loginWithGoogle} className="fw-600">
                    Google
                  </Button>
                  <Button variant="primary" size="sm" onClick={loginWithMicrosoft} className="fw-600">
                    Entrar
                  </Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
