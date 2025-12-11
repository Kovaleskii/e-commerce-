import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./product.css";
import Header from "../../Components/Header";

function ProdutoPage() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function fetchProduto() {
      const docRef = doc(db, "produto", id);  
      const snap = await getDoc(docRef);
 
      if (snap.exists()) {
        setProduto({
          id: snap.id,
          ...snap.data()
        });
      } else {
        console.log("Produto não encontrado");
      }
    }
    fetchProduto();
  }, [id]);

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <div className="product-page">
        <div className="product-card">
          <div className="product-image">
            <img src={produto.imagem || "/imagens/chevette.jpg"} alt={produto.modelo} />
          </div>

          <div className="product-details">
            <div className="brand-model">{produto.marca} {produto.modelo}</div>
            {produto.descricao && <p style={{marginTop:8, color:'#334'}}> {produto.descricao} </p>}

            <div className="specs">
              <div className="spec-item"><strong>Ano:</strong> {produto.ano}</div>
              <div className="spec-item"><strong>Motor:</strong> {produto.motor}</div>
              <div className="spec-item"><strong>Combustível:</strong> {produto.combustivel}</div>
              <div className="spec-item"><strong>Cor:</strong> {produto.cor}</div>
              <div className="spec-item"><strong>Portas:</strong> {produto.portas}</div>
            </div>

            <div className="actions">
              <button className="btn-primary">Comprar</button>
              <button className="btn-secondary">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdutoPage;