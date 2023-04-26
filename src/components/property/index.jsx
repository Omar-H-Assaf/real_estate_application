import { Icon, InfoConatiner, InfoLabel, PriceLabel, PropertyCard, PropertyImage, StatusContainer, StatusLabel } from "./style";
import { useNavigate } from 'react-router-dom';
import heart from '../../assets/icons/heart.png'
import redHeart from '../../assets/icons/redHeart.png'
import { useEffect, useState } from "react";
import Popup from "./popup";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Property = (props) => {

    const navigate = useNavigate();
    const [fav, setFav] = useState(false);
    const [click, setClick] = useState(false);

    const setFavIcon = (e) => {
        e.stopPropagation();
        setFav(!fav);
        setClick(true);
        disableBodyScroll(document);
    }
    useEffect(() => { enableBodyScroll(document); }, [])

    const childData = (data) => {
        setClick(data);
        enableBodyScroll(document);
    }

    return <PropertyCard onClick={() => { if (!click) navigate(`/offer/${props.id}`, { state: { img: props.imgSource } }) }}>
        <PropertyImage src={props.imgSource} />
        <PriceLabel>{props.price}</PriceLabel>
        <InfoConatiner>
            <InfoLabel>{props.area},</InfoLabel>
            <InfoLabel> Rooms: {props.rooms},</InfoLabel>
            <InfoLabel> {props.propertyType}</InfoLabel>
        </InfoConatiner>
        <StatusContainer>
            <StatusLabel status={props.status}>{props.status}</StatusLabel>
            <Icon src={fav ? redHeart : heart} onClick={(e) => setFavIcon(e)} />
        </StatusContainer>
        {click && fav && <Popup onData={childData} />}
    </PropertyCard>
}

export default Property;
