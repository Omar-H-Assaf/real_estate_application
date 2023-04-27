import { useRef } from "react";
import { PropertyImage, StatusLabel } from "../../property/style";
import { Button, Input } from "../../shared/style";
import { Container, PropertyCard } from "./style";

const MyProperty = (props) => {
    const propertyRef = useRef();
    const save = (e) => {
        e.preventDefault();
        const data = {
            img: propertyRef.current.img.value,
            price: propertyRef.current.price.value,
            area: propertyRef.current.area.value,
            rooms: propertyRef.current.rooms.value,
            propertyType: propertyRef.current.propertyType.value,
            status: propertyRef.current.status.value,
        }
        console.log(data);
    }
    return (<PropertyCard ref={propertyRef}>
        <PropertyImage src={props.imgSource} />
        <Input defaultValue={props.imgSource} name="img" />
        <Input defaultValue={props.price} name="price" />
        <Input defaultValue={props.area} name="area" />
        <Input defaultValue={props.rooms} name="rooms" />
        <Input defaultValue={props.propertyType} name="propertyType" />
        <Input defaultValue={props.status} name="status" />
        <Container>
            <Button onClick={(e) => save(e)}>Save Changes</Button>
            <StatusLabel status={"PENDING"}>Delete</StatusLabel>

        </Container>
    </PropertyCard>)
}
export default MyProperty;