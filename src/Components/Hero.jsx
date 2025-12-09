import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  function abrirInfo() {
    navigate("/about");
  }

  return (
    <section className="hero">
      <h2>Bem-vindo a Revendedora CarValeski</h2>
      <p>Especialista em carros seminovos e novos!</p>

      <Button variant="primary" onClick={abrirInfo}>
        Sobre nós
      </Button>
    </section>
  );
}

export default Hero;
