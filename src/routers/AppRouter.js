import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import IconSpinner from '../components/IconSpinner';
import NavBarTwo from '../components/NavBarTwo';

const AppRouter = () => {

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                //console.log(user);
                //console.log(user.uid);
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
            }

            setChecking(false)
        })

    }, [setIsLoggedIn, setChecking])

    if (checking) {
        return (
            <IconSpinner />
        )
    }

    return (
        <Router>
            <NavBar />
            <NavBarTwo />

            <Routes>
                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />


                <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login />
                    </PublicRoute>
                } />


                <Route path="/register" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Register />
                    </PublicRoute>
                } />


            </Routes>

            <Footer />
        </Router>
    )
}

export default AppRouter
