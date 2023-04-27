import { useEffect, useState } from "react";
import { PropertyContainer } from "../../homePage/style";
import Application from "./application";
import { getOffers } from "../../../services/OfferService";
import Cookies from "js-cookie";

const AllAplication = () => {

    const [offers , setOffers] = useState([])

    useEffect( () => {
        getOffers(Cookies.get('accessToken')).then( res => console.log(res)).catch(err => console.log(err))
    } , [])

    return <PropertyContainer style={{ marginTop: '2rem' }}>
        <Application id="1" price="200" message="ncfjcjnjdncjdncjdncjndjncjdncjdncjdncjdnjcndjcndjcnjdncjdncjdn" date="20/2/22" status="pending" />
        <Application />
        <Application />
        <Application />
    </PropertyContainer>
}

export default AllAplication;