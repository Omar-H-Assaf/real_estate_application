import { Button, Input, SignContainer, SignForm, SignText } from "../shared/style";
import { useNavigate } from 'react-router-dom';
import { RoleButton, RoleContainer, RoleSelect } from "./style";
import { useState } from "react";

const Register = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);

    return (
        <SignContainer>
            <SignForm>
                <Input type="text" placeholder="Full name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <RoleContainer>
                    <RoleButton
                        onClick={(e) => { e.preventDefault(); setActiveButton('button1') }}
                        disabled={activeButton === 'button2'}
                        role={`${activeButton === 'button1'}`}
                    >
                        Customer
                    </RoleButton>
                    <RoleButton
                        onClick={(e) => { e.preventDefault(); setActiveButton('button2') }}
                        disabled={activeButton === 'button1'}
                        role={`${activeButton === 'button2'}`}
                    >
                        Owener
                    </RoleButton>
                </RoleContainer>
                <Button type="submit">Sign up</Button>
                <div>
                    <label style={{ marginRight: '0.6rem' }}>Have an account?</label>
                    <SignText onClick={() => { navigate("/sign-in") }}>Sign in</SignText>
                </div>

            </SignForm>
        </SignContainer>
    )
}

export default Register;