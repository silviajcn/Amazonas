import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UserData from '../hooks/dataUser';
import { Container, Wrapper, Menu, MenuIdentification, ContainerIconIdent, Identification, MenuItem, MenuItemLink, MobileIcon, SubTitles, Items, ContainerLinks, LinksMenu } from "../styles/NavBarTwo.elements";
import '../styles/index.css';
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

const NavBarTwo = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const useUser = UserData();

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
                            
                            <Identification>
                                Hola, {
                                        useUser.name!==undefined?useUser.name:" identifícate"
                                      }
                            </Identification>
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
                                <div>
                                    <SubTitles><strong>Buscar Por Categoría</strong></SubTitles>
                                    <Items>Computadoras</Items>
                                    <Items>Celulares</Items>
                                    <Items>Camaras</Items>
                                    <Items>Tablets</Items>
                                    <Items>Audifonos</Items>
                                    <Items>Accesorios</Items>
                                </div>
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
