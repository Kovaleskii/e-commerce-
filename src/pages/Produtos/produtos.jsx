import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Header from '../../Components/Header';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'produto'));
        const dados = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProdutos(dados);
        setFiltrados(dados);
        setCarregando(false);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setCarregando(false);
      }
    };

    fetchProdutos();
  }, []);

  const handleFiltro = (e) => {
    const valor = e.target.value.toLowerCase();
    setFiltro(valor);
    const resultado = produtos.filter(p =>
      p.marca.toLowerCase().includes(valor) ||
      p.modelo.toLowerCase().includes(valor)
    );
    setFiltrados(resultado);
  };

  if (carregando) {
    return (
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Carregando produtos...</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div style={{ background: '#f7f9fc', paddingTop: 40, paddingBottom: 40, minHeight: '80vh' }}>
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 style={{ color: '#0077ff' }}>Catálogo de Veículos</h1>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Control
              placeholder="Buscar por marca ou modelo..."
              value={filtro}
              onChange={handleFiltro}
              style={{ borderRadius: 8, border: '1px solid #ddd' }}
            />
          </Col>
        </Row>

        <Row className="g-4">
          {filtrados.length === 0 ? (
            <Col>
              <p className="text-center text-muted">Nenhum veículo encontrado.</p>
            </Col>
          ) : (
            filtrados.map(produto => (
              <Col md={6} lg={3} key={produto.id}>
                <Card className="h-100 shadow-sm border-0 overflow-hidden" style={{ transition: 'transform 0.2s' }}>
                  <div style={{ height: 200, overflow: 'hidden', background: '#e0e0e0' }}>
                    <img
                      src={produto.imagem || '/imagens/chevette.jpg'}
                      alt={produto.modelo}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <Card.Body className="d-flex flex-column">
                    <Card.Title style={{ color: '#0077ff', fontWeight: 700 }}>
                      {produto.marca} {produto.modelo}
                    </Card.Title>

                    <div className="mb-3" style={{ fontSize: 13, color: '#666' }}>
                      <p className="mb-1"><strong>Ano:</strong> {produto.ano}</p>
                      <p className="mb-1"><strong>Motor:</strong> {produto.motor}</p>
                      <p className="mb-0"><strong>Combustível:</strong> {produto.combustivel}</p>
                    </div>

                    <div className="mt-auto">
                      <p style={{ fontSize: 18, fontWeight: 700, color: '#0077ff', marginBottom: 10 }}>
                        {produto.preco?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || 'Consulte'}
                      </p>

                      <div className="d-flex gap-2">
                        <Button
                          as={Link}
                          to={`/produto/${produto.id}`}
                          variant="primary"
                          className="w-100 fw-600"
                          size="sm"
                        >
                          Ver detalhes
                        </Button>
                        <Button
                          variant="outline-primary"
                          className="w-100 fw-600"
                          size="sm"
                        >
                          <i className="bi bi-cart-plus"></i>
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
      </div>
    </>
  );
}

export default Produtos;
