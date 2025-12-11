import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';

function CardExample() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        console.log("Buscando produtos...");
        const produtosRef = collection(db, "produto");
        const snapshot = await getDocs(produtosRef);
        
        const lista = snapshot.docs.map(doc => {
          const data = doc.data();
          console.log("Dados do produto:", data); 
          return {
            id: doc.id,
            ...data
          };
        });
        
        console.log("Produtos encontrados:", JSON.stringify(lista, null, 2));
        setProdutos(lista);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProdutos();
  }, []);

  function abrirProduto(id) {
    navigate(`/produto/${id}`);
  }


  if (produtos.length === 0) {
    return <div>Carregando produtos...</div>;
  }

  return (
    <div className="d-flex justify-content-around flex-wrap gap-3">
      {produtos.map((produto) => (
        <Card key={produto.id} style={{ width: '18rem' }}>
          <Card.Img 
            variant="top" 
            src={produto.imagem} 
            alt={`${produto.marca} ${produto.modelo}`} 
          />
          <Card.Body>
            <Card.Title className="card-title-gothic">
              {produto.marca} {produto.modelo}
            </Card.Title>
            <Card.Text>
              <strong>Ano:</strong> {produto.ano}<br />
              <strong>Motor:</strong> {produto.motor}<br />
              <strong>Combustível:</strong> {produto.combustivel}<br />
              <strong>Cor:</strong> {produto.cor}<br />
              <strong>Portas:</strong> {produto.portas}<br />
            </Card.Text>
            <Button variant="primary" onClick={() => abrirProduto(produto.id)}>
              Mais informações
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardExample;