import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Item = ({ elements }) => {
  return (
      
        <Card >
          <Card.Img variant="top" src={elements.url} />
          <Card.Body>
            <Card.Title>{elements.title}</Card.Title>
            <Card.Text>{elements.description}</Card.Text>
            <Card.Text>{elements.price}</Card.Text>
          </Card.Body>
          <Button variant="primary">Go somewhere</Button>
        </Card>
      
        
  );
};

export default Item;
