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
            <button onClick={() => handleLogout()}>
                Logout
            </button>
        </div>
    )
}

export default Home
