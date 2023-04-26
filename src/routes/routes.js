import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/homePage';
import SignInPage from '../components/signin';
import Register from '../components/register';

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path='register' element={<Register />} />
        </Routes>
    );
}
export default PageRoutes;