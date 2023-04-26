import { useRef, useState } from "react";
import { Button, Input } from "../../shared/style";
import { AddPropertiesContainer } from "./style";

const AddProperties = () => {

    const addPropertiesRef = useRef();
    const [property, setProperty] = useState({});

    const addProperties = (e) => {
        e.preventDefault();
        const data = {
            price: addPropertiesRef.current.price.value,
            propertType: addPropertiesRef.current.propertType.value,
            numberOfRooms: addPropertiesRef.current.numberOfRooms.value,
            contractType: addPropertiesRef.current.contractType.value,
            location: addPropertiesRef.current.location.value,
            image: addPropertiesRef.current.image.value,
        }
        console.log(data);
    }

    return <div style={{ display: 'flex', justifyContent: "center", alignItem: "center", marginTop: '4rem' }}>
        <AddPropertiesContainer ref={addPropertiesRef}>
            <h1>Add Properties</h1>
            <Input placeholder="Price" name="price" />
            <Input placeholder="Property Type" name="propertType" />
            <Input placeholder="Number Of Rooms" name="numberOfRooms" />
            <Input placeholder="Contract Type" name="contractType" />
            <Input placeholder="Location" name="location" />
            <Input placeholder="Image" name="image" />
            <Button onClick={(e) => addProperties(e)}>Add Properties</Button>
        </AddPropertiesContainer>
    </div>
}

export default AddProperties;