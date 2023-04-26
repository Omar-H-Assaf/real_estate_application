import { useRef, useState } from "react";
import { Button, Input } from "../shared/style";
import { OfferContainer, PropertyImage, PropertyInfo, TextArea } from "./style";
import { useLocation } from 'react-router-dom'
const Offer = () => {
    const location = useLocation();
    const [offer, setOffer] = useState();
    const propertyInfo = useRef();
    const sendOffer = (e) => {
        e.preventDefault();
        const data = {
            offer: propertyInfo.current.offerName.value,
            comment: propertyInfo.current.comment.value,
        };
        setOffer(data);
    }

    return (<OfferContainer>
        <PropertyImage src={location.state.img} />
        <PropertyInfo ref={propertyInfo}>
            <h1>Send Offer</h1>
            <Input name="offerName" typle="text" placeholder="Enter your offer price" />
            <TextArea name="comment" />
            <Button onClick={(e) => sendOffer(e)}>Send Offer</Button>
        </PropertyInfo>
    </OfferContainer>)
}

export default Offer;