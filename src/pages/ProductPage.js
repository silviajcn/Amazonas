import React from 'react';
import NavBarThree from '../components/NavBarThree';
import ProductDetails from '../components/ProductDetails';
import NewComent from '../components/NewComent';

const ProductPage = () => {
    return (
        <div>
            <NavBarThree />

            <ProductDetails />

            <div>
                <NewComent />
            </div>
        </div>
    )
}

export default ProductPage
