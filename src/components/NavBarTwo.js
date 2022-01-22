import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { listCategoriesAsync, searchProductAsync } from '../actions/actionProducts';
import { Container, Wrapper, Menu, MenuIdentification, ContainerIconIdent, Identification, MenuItem, MenuItemLink, MobileIcon, SubTitles, ContainerItemsCat, Items, ContainerLinks, LinksMenu } from "../styles/NavBarTwo.elements";
import '../styles/index.css';
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

const NavBarTwo = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    let history = useNavigate();

    const dispatch = useDispatch();

    const { categories } = useSelector((store) => store.categories);
    //console.log(categories)

    useEffect(() => {
        dispatch(listCategoriesAsync());
    }, []);

    //USER
    const { name } = useSelector(state => state.login)
    //console.log(name);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    React.useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (name) => {
            if (name?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, [setIsLoggedIn]);


    return (
        <Container>
            <Wrapper>

                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes />  : <FaBars />}
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        
                        <MenuIdentification>
                            <ContainerIconIdent>
                                    <FaUserCircle />
                            </ContainerIconIdent>
                            
                            { isLoggedIn ? (
                                <Identification>
                                    Hola, {name}
                                </Identification>
                            ) : (
                                <Identification>
                                    Hola, Identifícate
                                </Identification> 
                            )}
                        </MenuIdentification>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <SubTitles><strong>Amazonas, tu tienda digital</strong></SubTitles>
                                    <Link to="/products" className="links">
                                        <Items>Nuestros productos</Items>
                                    </Link>
                                    <Link to="/registerp" className="links">
                                        <Items>Vende con nosotros</Items>
                                    </Link>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <SubTitles><strong>Categorias</strong></SubTitles>
                                <>
                                    {
                                        categories.map((e, i) => (
                                            <ContainerItemsCat key={i}>
                                                <Items
                                                    onClick={() => {
                                                        dispatch(searchProductAsync(e.id))
                                                        history("/category")
                                                    }}
                                                >
                                                    {e.title}
                                                </Items>
                                            </ContainerItemsCat>
                                        ))
                                    }
                                </>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <SubTitles><strong>Ayuda Y Configuración</strong></SubTitles>
                                    <Items>Tu cuenta</Items>
                                    <Link to="/help" className="links"><Items>Servicio al cliente</Items></Link>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>

                <ContainerLinks>
                    <Link to="/products" className="links">
                        <LinksMenu>Todos los productos</LinksMenu>
                    </Link>

                    <Link to="/registerp" className="links">
                        <LinksMenu>Vender producto</LinksMenu>
                    </Link>

                    <Link to="/help" className="links">
                        <LinksMenu>Servicio al cliente</LinksMenu>
                    </Link>    
                    
                </ContainerLinks>

            </Wrapper>
        </Container>
    )
}

export default NavBarTwo
