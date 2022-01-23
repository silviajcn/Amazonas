import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { ContainerPrincipal, FirstContainer, Containers, Title, Items, LogoContainer, Logo, Credits, ScrollToTop, BackTopContainer, Indication } from '../styles/Footer.elements';
import '../styles/index.css';

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, [])

    return (
        <ContainerPrincipal>

            <ScrollToTop>
                {isVisible && (
                    <BackTopContainer
                        onClick={() => scrollToTop()}
                    >
                        <Indication>Ir al inicio de página</Indication>
                    </BackTopContainer>
                )}
            </ScrollToTop>

            <FirstContainer>
                <Containers>
                    <Link to="/" className="links"><Title>Conócenos</Title></Link>
                    <Link to="/" className="links"><Items>Trabajar en Amazonas</Items></Link>
                    <Link to="/" className="links"><Items>Información corporativa</Items></Link>
                    <Link to="/" className="links"><Items>Departamento de prensa</Items></Link>
                </Containers>

                <Containers>
                    <Link to="/registerp" className="links"><Title>Gana dinero con nosotros</Title></Link>
                    <Link to="/registerp" className="links"><Items>Vender en Amazonas</Items></Link>
                    <Link to="/registerp" className="links"><Items>Vender en Amazonas Handmade</Items></Link>
                    <Link to="/registerp" className="links"><Items>Publica tu libro en Kindle</Items></Link>
                    <Link to="/registerp" className="links"><Items>Programa de afiliados</Items></Link>
                    <Link to="/registerp" className="links"><Items>Anuncia tus productos</Items></Link>
                </Containers>
                    
                <Containers>
                    <Link to="/help" className="links"><Title>Podemos ayudarte</Title></Link>
                    <Link to="/help" className="links"><Items>Amazonas y COVID-19</Items></Link>
                    <Link to="/help" className="links"><Items>Devolver o reemplazar productos</Items></Link>
                    <Link to="/help" className="links"><Items>Gestionar contenido y dispositivos</Items></Link>
                    <Link to="/help" className="links"><Items>Ayuda</Items></Link>
                </Containers>

                <Containers>
                    <Link to="/carrito" className="links"><Title>Métodos de pago</Title></Link>
                    <Link to="/carrito" className="links"><Items>Tarjetas de crédito y débito</Items></Link>
                    <Link to="/carrito" className="links"><Items>Tarjetas de regalo</Items></Link>
                    <Link to="/carrito" className="links"><Items>Meses sin intereses</Items></Link>
                    <Link to="/carrito" className="links"><Items>Amazonas Cash</Items></Link>
                    <Link to="/carrito" className="links"><Items>Amazonas Recargable</Items></Link>  
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
