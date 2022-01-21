import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { listProductsAsync, showDetailProductAsync } from '../actions/actionProducts';
import Carousel from 'react-elastic-carousel';
import { FirstContainer, ImgCarouselTwo, BtnShowDetail } from '../styles/Carousel.elements';

const CarouselTwo = () => {

    let history = useNavigate();

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
                            <BtnShowDetail
                                // onClick={() => {
                                // localStorage.setItem('codeProduct', e.codeproduct)
                                // history("/details")
                                // }}

                                onClick={() => {
                                dispatch(showDetailProductAsync(e.codeproduct))
                                localStorage.setItem('codeProduct', e.codeproduct)
                                history("/details/" + e.codeproduct)
                             }}
                            >
                                <ImgCarouselTwo src={e.oneimage} alt="products" />
                            </BtnShowDetail>
                        </div>
                    ))
                }
            </Carousel>
        </FirstContainer>
    )
}

export default CarouselTwo
