import React from 'react';
import { Container, ContainerLinks, LinksMenu } from "../styles/NavBarThree.elements";

const NavBarThree = () => {
    return (
        <Container>
            <ContainerLinks>
                    <LinksMenu><strong>Electrónicos</strong></LinksMenu>

                    <LinksMenu>Los Más Vendidos</LinksMenu>

                    <LinksMenu>Televisión y Video</LinksMenu>

                    <LinksMenu>Cómputo y Tabletas</LinksMenu>

                    <LinksMenu>Audio y Equipos de Sonido</LinksMenu>
                </ContainerLinks>
        </Container>
    )
}

export default NavBarThree
