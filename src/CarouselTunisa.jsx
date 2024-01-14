import Carousel from 'react-bootstrap/Carousel';

function CarouselTunisia({items}) {
  return (
    <Carousel>
        {items.map(e=> <Carousel.Item>
        <img width={"100%"} src={e.img}></img>
        <Carousel.Caption>
          <h3>{e.name}</h3>
          <p>{e.description}</p>
        </Carousel.Caption>
      </Carousel.Item>)}
     
      
    </Carousel>
  );
}

export default CarouselTunisia;