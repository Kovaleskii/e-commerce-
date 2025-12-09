import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

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
    <div>
      <h1>{produto.nome}</h1>
      <img src={produto.imagem} width="400" alt={produto.nome} />

      <p><strong>Potência:</strong> {produto.potencia}</p>
      <p><strong>Torque:</strong> {produto.torque}</p>
      <p>{produto.descricao}</p>
    </div>
  );
}

export default ProdutoPage;
