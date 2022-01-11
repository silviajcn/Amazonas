import React from 'react';
import { Link } from "react-router-dom";
import SearchWords from '../components/SearchWords';
import { ContainerPrincipal, LogoContainer, ImgLogo, ContainerCar, BtnCar, LinksMenu } from '../styles/NavBar.elements';
import { RiShoppingCartLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";

const NavBar = () => {
    return (
        <ContainerPrincipal>
          
            <LogoContainer>
                <Link to="/">
                    <ImgLogo src="https://res.cloudinary.com/silviajcn/image/upload/v1640300505/SPRING-3/logo-amazon_d38j67.png" alt="logo"/>
                </Link>
            </LogoContainer>

            <FaMapMarkerAlt />

            <SearchWords />

            <ContainerCar>
                <BtnCar>
                    <RiShoppingCartLine />
                    <LinksMenu>Carrito</LinksMenu>
                </BtnCar>
            </ContainerCar>
        </ContainerPrincipal>
    )
}

export default NavBar
