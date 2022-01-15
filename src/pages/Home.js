import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin';
import CarouselHome from '../components/CarouselHome';
import Categories from '../components/Categories';
import CarouselTwo from '../components/CarouselTwo';
import { Link } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    

    return (
        <div className="first-container-home">

            <CarouselHome />

            <Categories />

            <CarouselTwo />

            <Link to="/details">
                <button>
                    Ir a products details
                </button>
            </Link>

            <Link to="/registerp">
                <button>
                    Ir a registrar producto
                </button>
            </Link>

            <Link to="/products">
                <button>
                    Ver todos los productos
                </button>
            </Link>

            <hr/>
            

            <img src="https://res.cloudinary.com/silviajcn/image/upload/v1641583841/SPRING-3/logo-footer_zysgvs.png" alt="logo"/>
            <button onClick={() => handleLogout()}>
                Logout
            </button>


        </div>
    )
}

export default Home
