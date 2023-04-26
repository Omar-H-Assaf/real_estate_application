import { InfoConatiner, InfoLabel, PriceLabel, PropertyCard, PropertyImage, StatusLabel } from "./style";

const Property = (props) => {
    return <PropertyCard>
        <PropertyImage src={props.imgSource} />
        <PriceLabel>{props.price}</PriceLabel>
        <InfoConatiner>
            <InfoLabel>{props.area},</InfoLabel>
            <InfoLabel> Rooms: {props.rooms},</InfoLabel>
            <InfoLabel> {props.propertyType}</InfoLabel>
        </InfoConatiner>
        <StatusLabel status={props.status}>{props.status}</StatusLabel>
    </PropertyCard>
}

export default Property;