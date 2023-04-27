import { useRef, useState } from "react";
import { Button, Input } from "../../shared/style";
import { AddPropertiesContainer } from "./style";
import { PropertyImage } from "../../property/style";

const AddProperties = () => {

    const addPropertiesRef = useRef();
    const [selectedImage, setSelectedImage] = useState(null);

    const addProperties = (e) => {
        e.preventDefault();
        const data = {
            price: addPropertiesRef.current.price.value,
            propertType: addPropertiesRef.current.propertType.value,
            numberOfRooms: addPropertiesRef.current.numberOfRooms.value,
            contractType: addPropertiesRef.current.contractType.value,
            location: addPropertiesRef.current.location.value,
            image: selectedImage,
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
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
            <Button onClick={(e) => addProperties(e)}>Add Properties</Button>
        </AddPropertiesContainer>
    </div>
}

export default AddProperties;