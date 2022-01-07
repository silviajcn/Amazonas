import React from 'react';
import { Link } from "react-router-dom";
import { ContainerPrincipal, FirstContainer, Containers, Title, Items, LogoContainer, Logo, Credits } from '../styles/Footer.elements';

const Footer = () => {
    return (
        <ContainerPrincipal>
            <FirstContainer>
                <Containers>
                    <Title>Conócenos</Title>
                    <Items>Trabajar en Amazon</Items>
                    <Items>Información corporativa</Items>
                    <Items>Departamento de prensa</Items>
                </Containers>

                <Containers>
                    <Title>Gana dinero con nosotros</Title>
                    <Items>Vender en Amazon</Items>
                    <Items>Vender en Amazon Handmade</Items>
                    <Items>Publica tu libro en Kindle</Items>
                    <Items>Programa de afiliados</Items>
                    <Items>Anuncia tus productos</Items>
                </Containers>
                    
                <Containers>
                    <Title>Podemos ayudarte</Title>
                    <Items>Amazon y COVID-19</Items>
                    <Items>Devolver o reemplazar productos</Items>
                    <Items>Gestionar contenido y dispositivos</Items>
                    <Items>Ayuda</Items>
                </Containers>

                <Containers>
                    <Title>Métodos de pago</Title>
                    <Items>Tarjetas de crédito y débito</Items>
                    <Items>Tarjetas de regalo</Items>
                    <Items>Meses sin intereses</Items>
                    <Items>Amazon Cash</Items>
                    <Items>Amazon Recargable</Items>
                </Containers>
            </FirstContainer>

            <LogoContainer>
                <Link to="/">
                    <Logo src="https://res.cloudinary.com/silviajcn/image/upload/v1641583841/SPRING-3/logo-footer_zysgvs.png" alt="logo" />
                </Link>
            </LogoContainer>

            <div>
                <Credits>© 2021, Amazonas By Silvi.</Credits>
            </div>
        </ContainerPrincipal>
    )
}

export default Footer
