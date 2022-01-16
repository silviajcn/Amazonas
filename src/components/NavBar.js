import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin';
import { Link } from "react-router-dom";
import UserData from '../hooks/dataUser';
import GeoLocation from './GeoLocation';
import SearchWords from './SearchWords';
import { ContainerPrincipal, LogoContainer, ImgLogo, ContainerCar, BtnCar, LinksMenu, ContainerAcount, TextPequenio, TextNegrita, TextEnviar, Location, ContainerDevolucion } from '../styles/NavBar.elements';
import '../styles/index.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = () => {

    const useUser = UserData();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    return (
        <ContainerPrincipal>
          
            <LogoContainer>
                <Link to="/">
                    <ImgLogo src="https://res.cloudinary.com/silviajcn/image/upload/v1640300505/SPRING-3/logo-amazon_d38j67.png" alt="logo"/>
                </Link>
            </LogoContainer>

            <GeoLocation />

            <SearchWords />

            <Link to="/login" className="links">
                <ContainerAcount>
                    <TextPequenio>
                        Hola, {
                              useUser.name!==undefined?useUser.name:" identifícate"
                              }
                    </TextPequenio>

                    <TextNegrita onClick={() => handleLogout()}>
                        {
                            useUser.name!==undefined?"Logout":" Listas y cuentas"
                        }
                    </TextNegrita>
                </ContainerAcount>
            </Link>

            <Link to="/login" className="links">
                <ContainerDevolucion>
                    <TextEnviar>Devoluciones</TextEnviar>

                    <Location>y Pedidos</Location>
                </ContainerDevolucion>
            </Link>

            <Link to="car" className="links">
                <ContainerCar>
                    <BtnCar>
                        <ShoppingCartOutlinedIcon />
                        <LinksMenu>Carrito</LinksMenu>
                    </BtnCar>
                </ContainerCar>
            </Link>
            
        </ContainerPrincipal>
    )
}

export default NavBar
