import { Button, Input, SignContainer, SignForm, SignText } from "../shared/style";
import { useNavigate } from 'react-router-dom';
import { RegisterContainer } from "./style";

const SignInPage = () => {
    const navigate = useNavigate();

    return (
        <SignContainer>
            <SignForm>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">Sign In</Button>
                <RegisterContainer>
                    <label>Not a member?</label>
                    <SignText onClick={() => { navigate("/register") }}>Register</ SignText>
                </RegisterContainer>
            </SignForm>
        </SignContainer>
    );
};

export default SignInPage