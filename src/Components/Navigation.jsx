import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';  

function Navigation() {
  return (
    <Nav variant="pills" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link as={Link} to="/produtos">
          Produtos
        </Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link as={Link} to="/contato">
          Contato
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;