import { useRef, useState } from "react";
import { Button, Input, SignContainer, SignForm } from "../../shared/style"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const ForgetPassword = () => {
    const navigate = useNavigate();
    const ForgetPasswordRef = useRef();
    const [otpSuccess, setOtpSuccess] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const ref = ForgetPasswordRef.current
        if (ref.email) {
            setOtpSuccess(true)
        }
        if (otpSuccess) {
            if (ref.otp.value === "1234") { navigate('/sign-in') }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Wrong otp!',
                })
            }
        }
    }

    return (
        <SignContainer>
            <SignForm ref={ForgetPasswordRef} onSubmit={SubmitHandler}>
                {otpSuccess ? <>

                    <Input type="email" placeholder="Enter Your Email" required />
                    <Input type="number" name="otp" placeholder="Enter OTP" required />
                    <Input type="password" placeholder="Enter Your Password" required />
                    <Input type="password" placeholder="Confirm Password" required /></>
                    : <Input type="email" name="email" placeholder="Enter Your Email" required />
                }
                <Button type="submit">{otpSuccess ? 'Back to Sign In' : 'Change Password'}</Button>
            </SignForm>
        </SignContainer>
    );
}

export default ForgetPassword