import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import CustomerService from '../components/CustomerService';
import Home from '../components/Home';
import ProductPage from '../components/ProductPage';

export const DashboardRoutes = () => {
    return (
        <>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/details' element={<ProductPage />} />
                <Route path='/help' element={<CustomerService />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </div>
        </>
    )
}


