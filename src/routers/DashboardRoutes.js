import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import ListProducts from '../pages/ListProducts';
import ProductPage from '../pages/ProductPage';
import NewProduct from '../pages/NewProduct';
import Searching from '../pages/Searching';
import Carrito from '../pages/Carrito';
import Checkout from '../pages/Checkout';
import Category from '../pages/Category';
import Sales from '../pages/Sales';

export const DashboardRoutes = () => {
    return (
        <>
        <div>
            <Routes>
                <Route path='/registerp' element={<NewProduct />} />
                <Route path='/list' element={<ListProducts />} />
                <Route path='/details/:codeproduct' element={<ProductPage />} />
                <Route path='/searching' element={<Searching />} />
                <Route path='/category' element={<Category />} />
                <Route path='/carrito' element={<Carrito />} />
                <Route path="/pay" element={<Checkout />} />
                <Route path="/sales" element={<Sales />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>

        </div>
        </>
    )
}


