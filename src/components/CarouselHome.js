import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContenedorPrincipal } from '../styles/Carousel.elements';

const CarouselHome = ({images}) => {

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
                  </Carousel.Item>
                  
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://res.cloudinary.com/silviajcn/image/upload/v1641652478/SPRING-3/carousel/carousel6_vvpf4k.jpg"
                          alt="Second slide"
                      />
                  </Carousel.Item>
                  
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://res.cloudinary.com/silviajcn/image/upload/v1641652474/SPRING-3/carousel/carousel5_gvlas2.jpg"
                          alt="Third slide"
                      />
                  </Carousel.Item>
                  
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://res.cloudinary.com/silviajcn/image/upload/v1641652471/SPRING-3/carousel/carousel4_tlhufb.jpg"
                          alt="Four slide"
                      />
                  </Carousel.Item>
                  
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://res.cloudinary.com/silviajcn/image/upload/v1641652469/SPRING-3/carousel/carousel2_f3b1e0.jpg"
                          alt="Five slide"
                      />
                  </Carousel.Item>
                  
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://res.cloudinary.com/silviajcn/image/upload/v1641652457/SPRING-3/carousel/carousel3_nosn08.jpg"
                          alt="Six slide"
                      />
                  </Carousel.Item>
              </Carousel>
          </ContenedorPrincipal>
          
        </div>
    )
}

export default CarouselHome
