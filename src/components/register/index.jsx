import { Button, Input, SignContainer, SignForm, SignText } from "../shared/style";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    return (
        <SignContainer>
            <SignForm>
                <Input type="text" placeholder="Full name" />
                <Input type="text" placeholder="Phone number" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="confirm Password" />
                <Button type="submit">Sign up</Button>
                <SignText onClick={() => { navigate("/sign-in") }}>Register</SignText>
            </SignForm>
        </SignContainer>
    )
}

export default Register;