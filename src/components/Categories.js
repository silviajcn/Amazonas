import React from 'react';
import { Link } from "react-router-dom";
import { ContainerPrincipal, Containers, ImgProduct, LinksBlue, TitleProduct } from '../styles/Categories.elements';

const Categories = () => {
    return (
        <ContainerPrincipal>
            <Containers>
                <Link to="/products" className="links">
                    <TitleProduct>Envío GRATIS a Colombia</TitleProduct>
                </Link>
                <Link to="/products" className="links">
                    <ImgProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1642090430/SPRING-3/categories/img1_y29kop.jpg" alt="..." />
                </Link>
                <Link to="/products" className="links">
                    <LinksBlue>Comprar ahora</LinksBlue>
                </Link>
            </Containers>

            <Containers>
                <Link to="/products" className="links">
                    <TitleProduct>Todos los productos</TitleProduct>
                </Link>
                <Link to="/products" className="links">
                    <ImgProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1642090442/SPRING-3/categories/img6_fedwzr.png" alt="..." />
                </Link>
                <Link to="/products" className="links">
                    <LinksBlue>Comprar ahora</LinksBlue>
                </Link>
            </Containers>

            <Containers>
                <TitleProduct>Camaras</TitleProduct>
                <ImgProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1642372375/SPRING-3/categories/camaras_ojsv1p.jpg" alt="..." />
                <LinksBlue>Comprar ahora</LinksBlue>
            </Containers>

            <Containers>
                <TitleProduct>Audifonos</TitleProduct>
                <ImgProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1642372684/SPRING-3/categories/audifonos_eiltgd.jpg" alt="..." />
                <LinksBlue>Comprar ahora</LinksBlue>
            </Containers>

            <Containers>
                <TitleProduct>Computadoras y Accesorios</TitleProduct>
                <ImgProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1642090435/SPRING-3/categories/img3_opyp81.jpg" alt="..." />
                <LinksBlue>Comprar ahora</LinksBlue>
            </Containers>

            <Containers>
                <TitleProduct>Celulares</TitleProduct>
                <ImgProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1642372383/SPRING-3/categories/celulares_xr6cl8.png" alt="..." />
                <LinksBlue>Comprar ahora</LinksBlue>
            </Containers>

            <Containers>
                <TitleProduct>Tablets</TitleProduct>
                <ImgProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1642372374/SPRING-3/categories/tablets_sdblls.jpg" alt="..." />
                <LinksBlue>Comprar ahora</LinksBlue>
            </Containers>

            <Containers>
                <TitleProduct>Accesorios</TitleProduct>
                <ImgProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1642090444/SPRING-3/categories/img7_c3oayc.png" alt="..." />
                <LinksBlue>Comprar ahora</LinksBlue>
            </Containers>
        </ContainerPrincipal>
    )
}

export default Categories
