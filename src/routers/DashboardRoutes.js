import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import CustomerService from '../pages/CustomerService';
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';
import ProductPage from '../pages/ProductPage';
import NewProduct from '../pages/NewProduct';
import GeoLocation from '../components/GeoLocation';
import Car from '../pages/Car';

export const DashboardRoutes = () => {
    return (
        <>
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registerp' element={<NewProduct />} />
                <Route path='/products' element={<AllProducts />} />
                <Route path='/details' element={<ProductPage />} />
                <Route path='/location' element={<GeoLocation />} />
                <Route path='/car' element={<Car />} />
                <Route path='/help' element={<CustomerService />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </div>
        </>
    )
}


