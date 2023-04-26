import { Nav, NavText } from "./style";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    return <Nav>
        <NavText onClick={() => { navigate("/") }}>Property Management Portal</NavText>
        <div>
            <NavText>Duplex</NavText>
            <NavText>Single</NavText>
            <NavText>Condo</NavText>
        </div>
        <NavText onClick={() => { navigate("sign-in") }}>Sign in</NavText>
    </Nav>
}

export default NavBar;