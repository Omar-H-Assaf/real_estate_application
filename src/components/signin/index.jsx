import { Button, Input, SignContainer, SignForm, SignText } from "../shared/style";
import { useNavigate } from 'react-router-dom';
import { ForgetPasswordText, RegisterContainer } from "./style";

const SignInPage = () => {
    const navigate = useNavigate();

    return (
        <SignContainer>
            <SignForm>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <RegisterContainer>
                    <Button type="submit">Sign In</Button>
                    <div>
                        <label style={{ marginRight: '0.6rem' }}>Not a member?</label>
                        <SignText onClick={() => { navigate("/register") }}>Register</ SignText>
                    </div>
                </RegisterContainer>
                <ForgetPasswordText onClick={() => { navigate("/forget-password") }}>Forget Password ?</ ForgetPasswordText>
            </SignForm>
        </SignContainer>
    );
};

export default SignInPage