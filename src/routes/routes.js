import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/homePage';
import SignInPage from '../components/signin';
import Register from '../components/register';
import ForgetPassword from '../components/signin/forgetPassword';
import Offer from '../components/offer';

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path='register' element={<Register />} />
            <Route path='forget-password' element={<ForgetPassword />} />
            <Route path='offer/:id' element={<Offer />} />
        </Routes>
    );
}
export default PageRoutes;