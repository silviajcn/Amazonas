import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin';

const Home = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    return (
        <div>
            <h1>Holi</h1>
            <img src="https://res.cloudinary.com/silviajcn/image/upload/v1641583841/SPRING-3/logo-footer_zysgvs.png" alt="logo"/>
            <button onClick={() => handleLogout()}>
                Logout
            </button>
        </div>
    )
}

export default Home
