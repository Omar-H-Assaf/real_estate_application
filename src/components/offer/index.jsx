import { useContext, useRef } from "react";
import { Button, Input } from "../shared/style";
import { OfferContainer, PropertyImage, PropertyInfo, TextArea } from "./style";
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { SendOffer } from "../../services/UserService";
import { SetJWT } from "../../store/context";
const Offer = (props) => {
    const { jwt } = useContext(SetJWT);
    const param = useParams();
    const location = useLocation();
    const propertyInfo = useRef();
    const navigate = useNavigate();

    const sendOffer = (e) => {
        e.preventDefault();
        const data = {
            price: propertyInfo.current.price.value,
            message: propertyInfo.current.comment.value,
            status: "OFFERED",
            property_id: param.id
        };
        SendOffer(data, jwt).then( res => navigate('/')).catch(err => console.log(err))
    }

    return (<OfferContainer>
        <PropertyImage src={location.state.img} />
        <PropertyInfo ref={propertyInfo}>
            <h1>Send Offer</h1>
            <Input name="price" typle="text" placeholder="Enter your offer price" />
            <TextArea name="comment" placeholder="Add your comments" />
            <Button onClick={(e) => sendOffer(e)}>Send Offer</Button>
        </PropertyInfo>
    </OfferContainer>)
}

export default Offer;