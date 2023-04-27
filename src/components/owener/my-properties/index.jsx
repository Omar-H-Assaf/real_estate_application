import { useEffect, useState,useContext } from "react";
import { PropertyContainer } from "../../homePage/style";
import MyProperty from "./my-property";
import { getMyProperties } from "../../../services/PropertyService";
import { SetJWT } from "../../../store/context";
import Cookies from "js-cookie";

const MyProperties = () => {
    const imgSource = "https://s0.2mdn.net/sadbundle/14800419125408425439/image.jpg";
    const [properties , setProperties] = useState([])
    const {useID} = useContext(SetJWT)

    useEffect( () => {
        getMyProperties(useID, Cookies.get('accessToken')).then((result) => {
            setProperties(result.data)
            console.log(result.data)
        }).catch((err) => {
            console.log(err);
        });
    } , [])

    return (
        <PropertyContainer>
        {
            console.log(properties) 
        }
        <MyProperty id="1" imgSource={imgSource} price="$20,000" area="200 sqft" rooms="3" status="Available" propertyType="House" />
    </PropertyContainer>
    )
}

export default MyProperties;