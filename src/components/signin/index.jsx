import { Button, Input, SignContainer, SignForm, SignText } from "../shared/style";
import { useNavigate } from 'react-router-dom';
import { ForgetPasswordText, RegisterContainer } from "./style";
import { useRef } from "react";
import {login} from '../../services/AuthService';
import Cookies from 'js-cookie';

const SignInPage = () => {
    const navigate = useNavigate();
    const loginForm = useRef()


    const SubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            email:loginForm.current.email.value,
            password:loginForm.current.password.value
        }
        login(data).then(res => {
            Cookies.set('accessToken' , res.data.accessToken)
            Cookies.set('refreshToken' , res.data.refreshToken)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <SignContainer>
            <SignForm ref={loginForm} onSubmit={SubmitHandler}>
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="password" name="password" placeholder="Password" required/>
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