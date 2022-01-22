import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { listCategoriesAsync, searchProductAsync } from '../actions/actionProducts';
import { ContainerPrincipal, Containers, ImgProduct, LinksBlue, TitleProduct } from '../styles/Categories.elements';

const Categories = () => {

    let history = useNavigate();

    const dispatch = useDispatch();

    const { categories } = useSelector((store) => store.categories);
    //console.log(categories)

    useEffect(() => {
        dispatch(listCategoriesAsync());
    }, []);

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

            <>
                {
                    categories.map((e, i) => (
                        <div key={i}>
                            <Containers id={e.id}>
                                <Link to="/category" className="links">
                                    <div onClick={() => {
                                        dispatch(searchProductAsync(e.id))
                                        //history("/category")
                                    }}>
                                <TitleProduct>{e.title}</TitleProduct>
                                <ImgProduct src={e.image} alt="..." />
                                <LinksBlue>Comprar ahora</LinksBlue>
                                </div>
                                </Link>
                            </Containers>
                        </div>
                    ))
               }
            </>
        </ContainerPrincipal>
    )
}

export default Categories
