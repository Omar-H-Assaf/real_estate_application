import { useEffect, useState } from "react";
import { PropertyContainer } from "../../homePage/style";
import MyProperty from "./my-property";
import { getMyProperties } from "../../../services/PropertyService";
import Cookies from "js-cookie";

const MyProperties = () => {
    const [properties , setProperties] = useState([])

    useEffect( () => {
        getMyProperties(Cookies.get('accessToken')).then((result) => {
            setProperties(result.data)
        }).catch((err) => {
            console.log(err);
        });
    } , [])

    return (
        <PropertyContainer>
        {
            properties && properties.map( p => {
                return <MyProperty key={p.id} id={p.id} imgSource={p.pictures.path} price={p.price} area={p.area} rooms={p.rooms} status={p.status} propertyType={p.propertyType} />
            })
        }
    </PropertyContainer>
    )
}

export default MyProperties;