import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProductsAsync } from '../actions/actionProducts';
import Carousel from 'react-elastic-carousel';
import { FirstContainer, ImgCarouselTwo } from '../styles/Carousel.elements';

const CarouselTwo = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);
    //console.log(products)

    useEffect(() => {
        dispatch(listProductsAsync());
    }, []);

    return (
        <FirstContainer>

            <h3>Nuestros productos</h3>
            <Carousel itemsToShow={5} pagination={false}>
                {
                    products.map((e, i) => (
                        <div key={i}>
                            <ImgCarouselTwo src={e.oneimage} alt="products" />
                        </div>
                    ))
                }
            </Carousel>
        </FirstContainer>
    )
}

export default CarouselTwo
