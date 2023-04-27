import { useEffect, useRef, useState } from "react";
import { PropertyImage, StatusLabel } from "../../property/style";
import { Button, Input } from "../../shared/style";
import { Container, PropertyCard } from "./style";
import { updateProperty , deleteProperty } from "../../../services/PropertyService";
import Cookies from "js-cookie";

const MyProperty = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);


    const propertyRef = useRef();

    const save = (e) => {
        e.preventDefault();
        const data = {
            price: propertyRef.current.price.value,
            area: propertyRef.current.area.value,
            rooms: propertyRef.current.rooms.value,
            propertyType: propertyRef.current.propertyType.value,
            status: propertyRef.current.status.value,
            id: props.id
        }
        console.log(data);
        updateProperty(data , Cookies.get('accessToken')).then( res => console.log(res)).catch(err => console.log(err))
    }


    const handleDelete = id => {
        console.log(id);
        if(id){
            deleteProperty(id , Cookies.get('accessToken')).then(res => console.log(res)).catch( err => console.log(err))
        }
    }

    return (
    <PropertyCard ref={propertyRef}>
        <PropertyImage src={selectedImage} />
        <Input defaultValue={props.price} name="price" />
        <Input defaultValue={props.area} name="area" />
        <Input defaultValue={props.rooms} name="rooms" />
        <Input defaultValue={props.propertyType} name="propertyType" />
        <Input defaultValue={props.status} name="status" />
        <Container>
            <Button onClick={(e) => save(e)}>Save Changes</Button>
            <StatusLabel onClick={ () => handleDelete(props.id)} status={"PENDING"}>Delete</StatusLabel>

        </Container>
    </PropertyCard>
    )
}
export default MyProperty;