import React from 'react';
import SearchWords from '../components/SearchWords';
import { ContainerPrincipal, LogoContainer, ImgLogo } from '../styles/NavBar.elements';

const NavBar = () => {
    return (
        <ContainerPrincipal>
          
            <LogoContainer>
              <ImgLogo src="https://res.cloudinary.com/silviajcn/image/upload/v1640300505/SPRING-3/logo-amazon_d38j67.png" alt="logo"/>
            </LogoContainer>

            <SearchWords />
        </ContainerPrincipal>
    )
}

export default NavBar
