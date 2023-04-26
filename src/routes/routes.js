import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/homePage';
import SignInPage from '../components/signin';
import Register from '../components/register';
import ForgetPassword from '../components/signin/forgetPassword';
import Offer from '../components/offer';
import AddProperties from '../components/owener/add-properties';
import MyProperties from '../components/owener/my-properties';
import AllAplication from '../components/owener/all-application';

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path='register' element={<Register />} />
            <Route path='forget-password' element={<ForgetPassword />} />
            <Route path='offer/:id' element={<Offer />} />
            <Route path='add-properties' element={<AddProperties />} />
            <Route path='my-properties' element={<MyProperties />} />
            <Route path='all-applications' element={<AllAplication />} />
        </Routes>
    );
}
export default PageRoutes;