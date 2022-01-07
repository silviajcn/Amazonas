import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
//import Footer from '../components/Footer';
import Home from '../components/Home';

export const DashboardRoutes = () => {
    return (
        <>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>

            {/* <Footer /> */}
        </div>
        </>
    )
}


