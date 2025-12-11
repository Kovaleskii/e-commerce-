import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Header from '../../Components/Header';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Recupera itens do localStorage (se existirem)
    const savedCart = localStorage.getItem('carvaleski-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    } else {
      // Se vazio, carrega itens de demonstração do Firebase
      loadDemoCart();
    }
  }, []);

  // Salva carrinho no localStorage sempre que muda
  useEffect(() => {
    localStorage.setItem('carvaleski-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const loadDemoCart = async () => {
    try {
      // Busca 2 produtos do Firebase para demonstração
      const produto1Ref = doc(db, 'produto', 'chevette-001');
      const produto2Ref = doc(db, 'produto', 'mustang-001');

      const snap1 = await getDoc(produto1Ref);
      const snap2 = await getDoc(produto2Ref);

      const items = [];
      if (snap1.exists()) {
        items.push({
          id: snap1.id,
          ...snap1.data(),
          quantidade: 1
        });
      }
      if (snap2.exists()) {
        items.push({
          id: snap2.id,
          ...snap2.data(),
          quantidade: 1
        });
      }

      if (items.length === 0) {
        // Se não encontrar, usa dados locais de fallback
        setCartItems([
          { id: 1, marca: 'Chevrolet', modelo: 'Chevette', preco: 15000, quantidade: 1, imagem: '/imagens/chevette.jpg' },
          { id: 2, marca: 'Ford', modelo: 'Mustang', preco: 45000, quantidade: 1, imagem: '/imagens/carvaleski.png' }
        ]);
      } else {
        setCartItems(items);
      }
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
      // Fallback para dados locais
      setCartItems([
        { id: 1, marca: 'Chevrolet', modelo: 'Chevette', preco: 15000, quantidade: 1, imagem: '/imagens/chevette.jpg' },
        { id: 2, marca: 'Ford', modelo: 'Mustang', preco: 45000, quantidade: 1, imagem: '/imagens/carvaleski.png' }
      ]);
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantidade = (id, novaQuantidade) => {
    if (novaQuantidade < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantidade: novaQuantidade } : item
    ));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  const totalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 200px)', background: '#f7f9fc', paddingTop: 40, paddingBottom: 40 }}>
        <Container>
          <Row className="mb-4">
            <Col>
              <h1 style={{ color: '#0077ff' }}>Seu Carrinho</h1>
            </Col>
          </Row>

        {cartItems.length === 0 ? (
          <Row>
            <Col md={8} className="mx-auto">
              <Alert variant="info" className="text-center">
                <h4>Carrinho vazio</h4>
                <p>Você ainda não adicionou nenhum veículo ao carrinho.</p>
                <Button as={Link} to="/produtos" variant="primary">Continuar comprando</Button>
              </Alert>
            </Col>
          </Row>
        ) : (
          <Row className="g-4">
            <Col lg={8}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4">
                  <div className="table-responsive">
                    <Table borderless>
                      <thead style={{ borderBottom: '2px solid #0077ff' }}>
                        <tr>
                          <th>Veículo</th>
                          <th>Preço</th>
                          <th>Quantidade</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map(item => (
                          <tr key={item.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                            <td>
                              <div className="d-flex align-items-center" style={{ gap: 10 }}>
                                <img 
                                  src={item.imagem || '/imagens/chevette.jpg'} 
                                  alt={item.modelo} 
                                  style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 6 }}
                                />
                                <div>
                                  <strong>{item.marca} {item.modelo}</strong>
                                </div>
                              </div>
                            </td>
                            <td>
                              {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </td>
                            <td>
                              <div className="d-flex align-items-center" style={{ gap: 5 }}>
                                <Button 
                                  variant="outline-primary" 
                                  size="sm"
                                  onClick={() => updateQuantidade(item.id, item.quantidade - 1)}
                                  style={{ width: 30, padding: 0 }}
                                >
                                  −
                                </Button>
                                <span style={{ minWidth: 30, textAlign: 'center' }}>{item.quantidade}</span>
                                <Button 
                                  variant="outline-primary" 
                                  size="sm"
                                  onClick={() => updateQuantidade(item.id, item.quantidade + 1)}
                                  style={{ width: 30, padding: 0 }}
                                >
                                  +
                                </Button>
                              </div>
                            </td>
                            <td>
                              {(item.preco * item.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </td>
                            <td>
                              <Button 
                                variant="link" 
                                className="text-danger p-0"
                                onClick={() => removeItem(item.id)}
                              >
                                Remover
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>

              <div className="mt-3">
                <Button as={Link} to="/produtos" variant="outline-primary">
                  ← Continuar comprando
                </Button>
              </div>
            </Col>

            <Col lg={4}>
              <Card className="shadow-sm border-0 sticky-top" style={{ top: 20 }}>
                <Card.Body className="p-4">
                  <h5 className="fw-bold mb-3">Resumo do pedido</h5>

                  <div className="mb-3 pb-3" style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal</span>
                      <span>{totalFormatado}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Frete</span>
                      <span className="text-success">Grátis</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mb-4">
                    <strong style={{ fontSize: 18 }}>Total</strong>
                    <strong style={{ fontSize: 18, color: '#0077ff' }}>{totalFormatado}</strong>
                  </div>

                  <Button 
                    variant="primary" 
                    className="w-100 mb-2 fw-bold"
                    style={{ padding: '10px 0' }}
                  >
                    Prosseguir para checkout
                  </Button>

                  <Button 
                    variant="outline-primary" 
                    className="w-100 fw-bold"
                    as={Link}
                    to="/produtos"
                  >
                    Continuar comprando
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
        </Container>
      </div>
    </>
  );
}

export default Cart;
