import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductItem({item,showMessage}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:"340px"}} variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name} </Card.Title>
        <Card.Text>
         {item.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>showMessage(item.name)}>Show my name</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;