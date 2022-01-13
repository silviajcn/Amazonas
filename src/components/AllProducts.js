import React from 'react';
import { ContainerPrincipal, ImgProduct } from '../styles/AllProducts.elements';

const AllProducts = () => {
    return (
        <ContainerPrincipal>
            <div>
                <ImgProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1641654716/SPRING-3/productos/camara/Rectangle_36_fvehjl.png" alt="producto" />
            </div>

            <div>
                <h2>Canon EOS R6 - Cámara sin Espejo de Marco Completo + Lente RF24-105mm F4 L IS USM</h2>

                <div>
                    <p>US$</p>
                    <p>199</p>
                </div>
            </div>
        </ContainerPrincipal>
    )
}

export default AllProducts
