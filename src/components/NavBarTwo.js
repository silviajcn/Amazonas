import React, { useState } from 'react';
import { Container, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon, Items, ContainerLinks, LinksMenu } from "../styles/NavBarTwo.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

const NavBarTwo = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper>

                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes />  : <FaBars />}
                    </MobileIcon>

                    <Menu open = {showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <h4>Contenido Y Dispositivos Digitales</h4>
                                    <Items>Amazonas music</Items>
                                    <Items>E-Readers Kindle y libros</Items>
                                    <Items>Appstore Para Android</Items>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                        
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                <div>
                                    <h4>Buscar Por Departamento</h4>
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
                                    <h4>Ayuda Y Configuración</h4>
                                    <Items>Tu cuenta</Items>
                                    <Items>Servicio al cliente</Items>
                                    <Items>Identifícate</Items>
                                </div>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>

                <ContainerLinks>
                    <LinksMenu>Ofertas del día</LinksMenu>

                    <LinksMenu>Servicio al cliente</LinksMenu>

                    <LinksMenu>Listas</LinksMenu>

                    <LinksMenu>Tarjetas de regalo</LinksMenu>

                    <LinksMenu>Vender</LinksMenu>

                    <LinksMenu>Prime</LinksMenu>
                </ContainerLinks>

            </Wrapper>
        </Container>
    )
}

export default NavBarTwo
