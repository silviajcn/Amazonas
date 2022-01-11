import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import CustomerService from '../components/CustomerService';
import Home from '../components/Home';
import ProductPage from '../components/ProductPage';
import GeoLocation from '../components/GeoLocation';

export const DashboardRoutes = () => {
    return (
        <>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/details' element={<ProductPage />} />
                <Route path='/location' element={<GeoLocation />} />
                <Route path='/help' element={<CustomerService />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </div>
        </>
    )
}


