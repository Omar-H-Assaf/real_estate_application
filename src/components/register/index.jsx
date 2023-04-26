import { Button, Input, RadioButton, RadioContainer, SignContainer, SignForm, SignText } from "../shared/style";
import { useNavigate } from 'react-router-dom';
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
                <RadioContainer>
                    <RadioButton
                        onClick={(e) => { e.preventDefault(); setActiveButton('button1') }}
                        disabled={activeButton === 'button2'}
                        active={`${activeButton === 'button1'}`}
                    >
                        Customer
                    </RadioButton>
                    <RadioButton
                        onClick={(e) => { e.preventDefault(); setActiveButton('button2') }}
                        disabled={activeButton === 'button1'}
                        active={`${activeButton === 'button2'}`}
                    >
                        Owener
                    </RadioButton>
                </RadioContainer>
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