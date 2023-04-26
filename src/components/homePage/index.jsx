import { useEffect, useRef, useState } from "react";
import Property from "../property"
import { Button, Input, SignText } from "../shared/style";
import { FilterContainer, HomePageContainer, ImageContainer, ImageText, MainImage, PropertyContainer, SearchBarWrapper, SearchInput } from "./style";
import {property} from "../../services/PropertyService";


const HomePage = () => {

    const [properties, setProperties] = useState([])
    const imgSource = "https://s0.2mdn.net/sadbundle/14800419125408425439/image.jpg";
    const [filterData, setFilterData] = useState({});
    const [searchData, setSearchData] = useState("");
    const filterRef = useRef();

    useEffect(() => {
        property().then(res => setProperties(res.data)).catch( err => console.log(err))
    }, [])

    const removeFilters = (e) => {
        e.preventDefault();
        setFilterData({});
        filterRef.current.price.value = "";
        filterRef.current.propertType.value = "";
        filterRef.current.numberOfRooms.value = "";
        filterRef.current.homeType.value = "";
        filterRef.current.location.value = "";
    }

    const applyFilters = (e) => {
        e.preventDefault();
        const data = {
            price: filterRef.current.price.value,
            propertType: filterRef.current.propertType.value,
            numberOfRooms: filterRef.current.numberOfRooms.value,
            homeType: filterRef.current.homeType.value,
            location: filterRef.current.location.value
        };
        setFilterData(data);
    }

    const onSearch = (events) => {
        setSearchData(events.target.value);
    }
    return (
        <HomePageContainer>
            <ImageContainer>
                <MainImage
                    src="https://hips.hearstapps.com/hmg-prod/images/edc110122abillama-006-1665505785.jpg?crop=1xw:1xh;center,top&resize=980:*"
                >
                </MainImage>
                <ImageText>Find it. Tour it. Own it.</ImageText>
                <SearchBarWrapper>
                    <SearchInput type="text" placeholder="Enter an address, or ZIP code" onChange={(event) => { onSearch(event) }} />
                </SearchBarWrapper>
            </ImageContainer>
            <FilterContainer ref={filterRef}>
                <Input type="text" name="price" placeholder="Price" />
                <Input type="text" name="propertType" placeholder="Property Type" />
                <Input type="text" name="numberOfRooms" placeholder="Number of Rooms" />
                <Input type="text" name="homeType" placeholder="Home Type" />
                <Input type="text" name="location" placeholder="Location" />
                <div>
                    <Button onClick={(e) => applyFilters(e)}>Apply Filter</Button>
                    <SignText style={{ marginLeft: '4rem' }} onClick={(e) => removeFilters(e)}>Remove Filters</SignText>
                </div>
            </FilterContainer>
            <PropertyContainer>
                {
                    properties.map(p => {
                        return <Property key={p.id} id={p.id} imgSource={p.pictures[0]['path']} price={'$'+p.price} area={p.area + "sqft"} 
                        rooms={p.rooms} status={p.status} propertyType={p.propertyType} />
                    })
                }
            </PropertyContainer>
        </HomePageContainer>
    )
}

export default HomePage