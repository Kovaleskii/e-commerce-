import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';

function CardExample() {
  const navigate = useNavigate();

  const [produtos, setProdutos] = useState([])

  function abrirProduto(id) {
    navigate(`/produto/${id}`);

        useEffect(() => {
    async function fetchProdutos() {
      const produtosRef = collection(db, "produto");
      const snapshot = await getDocs(produtosRef);
     
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
 
      setProdutos(lista);
    }
 
    fetchProdutos();
  }, []);
 
  }

  return (
    <div className="d-flex justify-content-around">
      <Card className="w-100">
        <Card.Img variant="top" src="/imagens/chevette.jpg" />
        <Card.Body>
          <Card.Title className="card-title-gothic">Chevette Turbão</Card.Title>
          <Card.Text>
            <strong>Potência:</strong> 150 a 250+ cv, dependendo do acerto.<br />
            <strong>Torque:</strong> ganhos superiores a 100% sobre o original.<br />
            Resposta mais rápida e maior elasticidade do motor.<br />
          </Card.Text>

          <Button variant="primary" onClick={abrirProduto}>
            Mais informações
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
