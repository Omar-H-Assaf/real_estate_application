import { useContext } from "react";
import { SetJWT } from "../../store/context";
import { Nav, NavText } from "./style";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const NavBar = () => {
    const navigate = useNavigate();
    const { jwt, setJwt } = useContext(SetJWT);

    return <Nav>
        <NavText onClick={() => { navigate("/") }}>Property Management Portal</NavText>
        <div>
            <NavText onClick={() => { navigate("/add-properties") }}>Add Properties</NavText>
            <NavText onClick={() => { navigate("/my-properties") }}>My Properties</NavText>
            <NavText onClick={() => { navigate("/all-applications") }}>all applications</NavText>
            {jwt ? <NavText onClick={() => { setJwt(""); Cookies.remove("accessToken"); Cookies.remove("refreshToken"); }}>Log out</NavText> : <NavText onClick={() => { navigate("sign-in") }}>Sign in</NavText>}
        </div>
    </Nav>
}

export default NavBar;