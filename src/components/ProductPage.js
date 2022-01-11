import React from 'react';
import NavBarThree from './NavBarThree';
import ProductDetails from './ProductDetails';
//import ExampleListar from './ExampleListar';
import Opinions from './Opinions';

const ProductPage = () => {
    return (
        <div>
            <NavBarThree />

            <ProductDetails />

            {/* <ExampleListar /> */}

            <Opinions />
        </div>
    )
}

export default ProductPage
