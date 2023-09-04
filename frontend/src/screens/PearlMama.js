import 'bootstrap/dist/css/bootstrap.min.css';  
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import flo  from '../assets/flo.jpg';
import logo1 from '../assets/logo1.jpg';
import finn from '../assets/finn.jpeg'

const PearlMama =() => {
  return (
    <>
    <Row xs={1} md={3} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={flo} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card>
            <Card.Img variant="top" src={finn} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src={logo1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
     <Row xs={1} md={2} lg={2} className="g-4">
      <Col>
          <Card>
            <Card.Img variant="top" src={logo1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    <Col>
    <Card>
      <Card.Img variant="top" src={flo} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
</>
  );
}

export default PearlMama;
