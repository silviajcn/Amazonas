import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { listCategoriesAsync, searchProductAsync } from '../actions/actionProducts';
import { Container, ContainerLinks, LinksMenu } from "../styles/NavBarThree.elements";

const NavBarThree = () => {

    let history = useNavigate();

    const dispatch = useDispatch();

    const { categories } = useSelector((store) => store.categories);
    //console.log(categories)

    useEffect(() => {
        dispatch(listCategoriesAsync());
    }, []);

    return (
        <Container>
            <ContainerLinks>
                {
                    categories.map((e, i) => (
                        <div key={i}>
                            <Link to="/category" className="links">
                            <LinksMenu
                                onClick={() => {
                                    dispatch(searchProductAsync(e.id))
                                }}
                            >
                                <strong>{e.title}</strong>
                            </LinksMenu>
                            </Link>
                        </div>
                    ))
                }
            </ContainerLinks>
        </Container>
    )
}

export default NavBarThree
