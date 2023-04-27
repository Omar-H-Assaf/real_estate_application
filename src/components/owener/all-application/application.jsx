import { TextArea } from "../../offer/style";
import { InfoLabel, PropertyCard } from "../../property/style";
import { Button } from "../../shared/style";
import { ButtonContainer } from "./style";

const Application = (props) => {
    return <PropertyCard style={{ display: "flex", flexDirection: "column", gap: 40, padding: '2rem' }}>
        <InfoLabel>Id: {props.id}</InfoLabel>
        <InfoLabel>Price: {props.price}</InfoLabel>
        <TextArea disabled value={props.message} />
        <InfoLabel>Date: {props.date}</InfoLabel>
        <InfoLabel>Status: {props.status}</InfoLabel>
        <ButtonContainer>
            <Button>Accept</Button>
            <Button style={{ marginLeft: '3rem', backgroundColor: 'red' }}>Reject</Button>
        </ButtonContainer>
    </PropertyCard>
}
export default Application;