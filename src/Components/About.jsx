import React from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary bg-gradient text-white py-5">
        <Container>
          <Row className="py-5">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Sobre a Carvaleski Veículos</h1>
              <p className="lead fs-4">
                Nossa missão: tornar a compra do seu carro uma experiência 
                <span className="fw-bold"> honesta</span>, 
                <span className="fw-bold"> transparente</span> e 
                <span className="fw-bold"> inesquecível</span>.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <Card className="shadow-lg border-0 p-3 p-md-4">
              <Card.Body>
                <h2 className="h3 fw-bold text-primary mb-4 text-center">Nossa História</h2>
                
                <p className="lead text-muted mb-4">
                  A Carvaleski Veículos nasceu com um propósito simples: transformar 
                  a compra de um carro em uma experiência honesta, transparente e inesquecível.
                </p>
                
                <p className="mb-4">
                  Nossa história começa com a família Carvaleski, que sempre acreditou 
                  que veículos não são apenas produtos — são oportunidades de mobilidade, 
                  liberdade e realização. O que começou como uma pequena garagem no 
                  interior tornou-se uma revendedora reconhecida pela confiança, 
                  qualidade e atendimento humano.
                </p>
                
                <Alert variant="light" className="border-start border-primary border-5">
                  <p className="mb-0 fst-italic">
                    Desde o início, adotamos um compromisso que seguimos até hoje: 
                    <strong className="text-primary"> ouvir primeiro, vender depois</strong>. 
                    Aqui, cada cliente é atendido com cuidado individual, e cada veículo 
                    passa por uma seleção rigorosa para garantir segurança, procedência 
                    e tranquilidade.
                  </p>
                </Alert>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12} className="text-center mb-4">
            <h2 className="display-6 fw-bold">Nossos Valores</h2>
            <hr className="w-25 mx-auto text-primary" style={{height: '3px', opacity: '1'}} />
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body className="p-4">
                <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                  <i className="bi bi-eye fs-2 text-primary"></i>
                </div>
                <h5 className="fw-bold mb-3">Transparência</h5>
                <p className="text-muted small mb-0">Em cada detalhe da negociação</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body className="p-4">
                <div className="rounded-circle bg-success bg-opacity-10 p-3 d-inline-block mb-3">
                  <i className="bi bi-gem fs-2 text-success"></i>
                </div>
                <h5 className="fw-bold mb-3">Qualidade</h5>
                <p className="text-muted small mb-0">Veículos escolhidos a dedo</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body className="p-4">
                <div className="rounded-circle bg-info bg-opacity-10 p-3 d-inline-block mb-3">
                  <i className="bi bi-people fs-2 text-info"></i>
                </div>
                <h5 className="fw-bold mb-3">Atendimento</h5>
                <p className="text-muted small mb-0">Humanizado e personalizado</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body className="p-4">
                <div className="rounded-circle bg-warning bg-opacity-10 p-3 d-inline-block mb-3">
                  <i className="bi bi-heart fs-2 text-warning"></i>
                </div>
                <h5 className="fw-bold mb-3">Respeito</h5>
                <p className="text-muted small mb-0">Pelo sonho de cada cliente</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <Card className="bg-light border-0">
              <Card.Body className="p-4 p-md-5">
                <Row className="align-items-center">
                  <Col lg={8}>
                    <h3 className="fw-bold mb-4">Nossa Evolução</h3>
                    <p className="mb-4">
                      Ao longo dos anos, evoluímos, ampliamos nossa estrutura e 
                      modernizamos nossos processos — mas sem perder nossa essência. 
                    </p>
                    <p className="mb-0">
                      Crescemos porque pessoas que confiaram em nós recomendaram 
                      nosso trabalho. Crescemos porque entendemos que vender carros 
                      é, antes de tudo, <strong className="text-primary">construir 
                      relacionamentos duradouros</strong>.
                    </p>
                  </Col>
                  <Col lg={4} className="text-center mt-4 mt-lg-0">
                    <div className="display-1 fw-bold text-primary opacity-25">
                      <i className="bi bi-graph-up-arrow"></i>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="mb-5 text-center">
          <Col md={4} className="mb-3 mb-md-0">
            <div className="p-3">
              <h2 className="display-5 fw-bold text-primary">15+</h2>
              <p className="text-muted">Anos de Experiência</p>
            </div>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <div className="p-3">
              <h2 className="display-5 fw-bold text-primary">1000+</h2>
              <p className="text-muted">Clientes Satisfeitos</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3">
              <h2 className="display-5 fw-bold text-primary">100%</h2>
              <p className="text-muted">Comprometimento</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="bg-primary bg-gradient text-white border-0">
              <Card.Body className="p-5 text-center">
                <h3 className="fw-bold mb-4">Pronto para encontrar seu próximo veículo?</h3>
                <p className="lead mb-4">
                  Venha conhecer nossa história de perto e faça parte dela.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-center">
                  <Button 
                    variant="light" 
                    size="lg" 
                    className="px-4 py-3 fw-bold"
                    href="/contact"
                  >
                    <i className="bi bi-chat-dots me-2"></i>
                    Fale Conosco
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg" 
                    className="px-4 py-3 fw-bold border-2"
                    href="/"
                  >
                    <i className="bi bi-car-front me-2"></i>
                    Ver Veículos
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="bg-light py-4 mt-5">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="text-muted mb-0">
                © 2024 Carvaleski Veículos - Todos os direitos reservados
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;