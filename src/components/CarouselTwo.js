import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProductsAsync } from '../actions/actionProducts';
import Carousel from 'react-elastic-carousel';

const CarouselTwo = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);
    //console.log(products)

    useEffect(() => {
        dispatch(listProductsAsync());
    }, []);

    return (
        <div className="first-container">
            <Carousel itemsToShow={5} showArrows={false} pagination={false}>
                {
                    products.map((e, i) => (
                        <div key={i}>
                            <img src={e.oneimage} alt="products" className="img-carousel-two" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default CarouselTwo
