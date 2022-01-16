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
                                    <SubTitles>Contenido Y Dispositivos Digitales</SubTitles>
                                    <Items>Amazonas music</Items>
                                    <Items>E-Readers Kindle y libros</Items>
                                    <Items>Appstore Para Android</Items>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <SubTitles>Buscar Por Departamento</SubTitles>
                                    <Items>Electrónicos</Items>
                                    <Items>Software</Items>
                                    <Items>Salud y Hogar</Items>
                                    <Items>Moda para mujer</Items>
                                    <Items>Moda para hombre</Items>
                                    <Items>Juguetes y juegos</Items>
                                </div>
                            </MenuItemLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <SubTitles>Ayuda Y Configuración</SubTitles>
                                    <Items>Tu cuenta</Items>
                                    <Link to="/help" className="links"><Items>Servicio al cliente</Items></Link>
                                    <Items>Identifícate</Items>
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

                    <Link to="/details" className="links">
                        <LinksMenu>Detalles (provisional)</LinksMenu>
                    </Link>

                    
                </ContainerLinks>

            </Wrapper>
        </Container>
    )
}

export default NavBarTwo
