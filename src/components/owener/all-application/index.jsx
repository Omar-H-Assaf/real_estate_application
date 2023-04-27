import { useEffect, useState } from "react";
import { PropertyContainer } from "../../homePage/style";
import Application from "./application";
import { getOffers } from "../../../services/OfferService";
import Cookies from "js-cookie";

const AllAplication = () => {

    const [offers , setOffers] = useState([])

    useEffect( () => {
        getOffers(Cookies.get('accessToken')).then( res => setOffers(res.data)).catch(err => console.log(err))
    } , [])

    return <PropertyContainer style={{ marginTop: '2rem' }}>
    {
        offers && offers.map( offer => {
            return <Application id={offer.id} price={offer.price} message={offer.message} date={offer.offerDate} status={offer.status} />
        })
    }
    </PropertyContainer>
}

export default AllAplication;