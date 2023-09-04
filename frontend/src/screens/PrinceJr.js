import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo1 from '../assets/logo1.jpg';
import flo from '../assets/flo.jpg';
import finn from '../assets/finn.jpeg';

const PrinceJr = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={flo} alt="Image Alt Text" />
            <Card.Body>
              <Card.Title>Business Directions Award in London</Card.Title>
              <Card.Text>Date: November 11, 2014</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={logo1} alt="Image Alt Text" />
            <Card.Body>
              <Card.Title>Card 2 Title</Card.Title>
              <Card.Text>Some text for card 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={flo} alt="Image Alt Text" />
            <Card.Body>
              <Card.Title>Card 1 Title</Card.Title>
              <Card.Text>Some text for card 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col md={4}>
          <Card>
            <Card.Img variant="top" src={flo} alt="Image Alt Text" />
            <Card.Body>
              <Card.Title>Card 1 Title</Card.Title>
              <Card.Text>Some text for card 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={flo} alt="Image Alt Text" />
            <Card.Body>
              <Card.Title>Card 1 Title</Card.Title>
              <Card.Text>Some text for card 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={flo} alt="Image Alt Text" />
            <Card.Body>
              <Card.Title>Card 3 Title</Card.Title>
              <Card.Text>Some text for card 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PrinceJr;