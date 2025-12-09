import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card";

function Grid() {
  return (
  <Container className="mt-4">
  <Row className="g-4">
    <Col md={3}><Card /></Col>
    <Col md={3}><Card /></Col>
    <Col md={3}><Card /></Col>
    <Col md={3}><Card /></Col>
  </Row>
    <Row className="g-4, mt-4">
    <Col md={3}><Card /></Col>
    <Col md={3}><Card /></Col>
    <Col md={3}><Card /></Col>
    <Col md={3}><Card /></Col>
  </Row>    
</Container>

  );
}

export default Grid;
