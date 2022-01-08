import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ContenedorPrincipal } from '../styles/Carousel.elements';

const CarouselHome = () => {
    return (
      <div>
        <ContenedorPrincipal>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/silviajcn/image/upload/v1641652466/SPRING-3/carousel/carousel1_s5ifjs.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/silviajcn/image/upload/v1641652478/SPRING-3/carousel/carousel6_vvpf4k.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/silviajcn/image/upload/v1641652474/SPRING-3/carousel/carousel5_gvlas2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
          </Carousel>
          </ContenedorPrincipal>
        </div>
    )
}

export default CarouselHome
