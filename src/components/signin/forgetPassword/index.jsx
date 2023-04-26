import { Button, Input, SignContainer, SignForm } from "../../shared/style"
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navigate = useNavigate();

    return (
        <SignContainer>
            <SignForm>
                <Input type="password" placeholder="New Password" />
                <Input type="password" placeholder="Confirm Password" />
                <Button type="submit" onClick={(e) => { e.preventDefault(); navigate('/sign-in') }}>Back to Sign In</Button>
            </SignForm>
        </SignContainer>
    );
}

export default ForgetPassword