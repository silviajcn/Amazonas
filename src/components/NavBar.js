import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin';
import { Link } from "react-router-dom";
import GeoLocation from './GeoLocation';
import SearchWords from './SearchWords';
import { ContainerPrincipal, LogoContainer, ImgLogo, ContainerCar, BtnCar, BadgeI, LinksMenu, ContainerAcount, TextPequenio, TextNegrita, TextEnviar, Location, ContainerDevolucion } from '../styles/NavBar.elements';
import '../styles/index.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

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

    
    //LOGOUT
    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    //PRODUCTS IN CART
    const { cart } = useSelector((store) => store.shopping);

    const totalItems = () => {
        const reducer = (counter, currentValue) => counter + currentValue.quantity
        const add = cart.reduce(reducer, 0)
        
        return add
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
                    { isLoggedIn ? (
                        <div>
                            <TextPequenio>
                                Hola, {name}
                            </TextPequenio>
                            <TextNegrita onClick={() => handleLogout()}>Logout</TextNegrita>
                        </div>
                    ) : (
                           <TextPequenio>
                            Hola, Identifícate
                           </TextPequenio> 
                    )}
                </ContainerAcount>
            </Link>

            <Link to="/sales" className="links">
                <ContainerDevolucion>
                    <TextEnviar>Amazonas</TextEnviar>

                    <Location>Ventas</Location>
                </ContainerDevolucion>
            </Link>

            <Link to="/carrito" className="links">
                <ContainerCar>
                    <BtnCar>
                        <div>
                            <ShoppingCartOutlinedIcon />
                            <BadgeI><strong>{totalItems()}</strong></BadgeI>
                        </div>
                        <LinksMenu>Carrito</LinksMenu>
                    </BtnCar>
                </ContainerCar>
            </Link>
            
        </ContainerPrincipal>
    )
}

export default NavBar
