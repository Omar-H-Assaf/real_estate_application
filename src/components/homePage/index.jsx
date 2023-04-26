import { useEffect, useState } from "react";
import Property from "../property"
import { Button, Input, SignText } from "../shared/style";
import { FilterContainer, HomePageContainer, ImageContainer, ImageText, MainImage, PropertyContainer, SearchBarWrapper, SearchInput } from "./style"
import { API_URL } from "../../config";
import axios from "axios";

const HomePage = () => {

    const [properties , setProperties] = useState([])
    const imgSource = "https://s0.2mdn.net/sadbundle/14800419125408425439/image.jpg";

    useEffect( () => {
        axios.get(`${API_URL}/`)
    } , [])

    return (
        <HomePageContainer>
            <ImageContainer>
                <MainImage
                    src="https://hips.hearstapps.com/hmg-prod/images/edc110122abillama-006-1665505785.jpg?crop=1xw:1xh;center,top&resize=980:*"
                >
                </MainImage>
                <ImageText>Find it. Tour it. Own it.</ImageText>
                <SearchBarWrapper>
                    <SearchInput type="text" placeholder="Enter an address, or ZIP code"></SearchInput>
                </SearchBarWrapper>
            </ImageContainer>
            <FilterContainer>
                <Input type="text" placeholder="Price" />
                <Input type="text" placeholder="Property Type" />
                <Input type="text" placeholder="Number of Rooms" />
                <Input type="text" placeholder="Home Type" />
                <Input type="text" placeholder="Location" />
                <div>
                    <Button>Apply Filter</Button>
                    <SignText style={{ marginLeft: '4rem' }}>Remove Filters</SignText>
                </div>
            </FilterContainer>
            <PropertyContainer>
                <Property imgSource={imgSource} price="$20,000" area="200 sqft" rooms="3" status="Available" propertyType="House" />
                <Property imgSource={imgSource} price="$20,000" area="200 sqft" rooms="3" status="Pending" propertyType="House" />
                <Property imgSource={imgSource} price="$20,000" area="200 sqft" rooms="3" status="Pending" propertyType="House" />
                <Property imgSource={imgSource} price="$20,000" area="200 sqft" rooms="3" status="Contingent" propertyType="House" />
            </PropertyContainer>
        </HomePageContainer>
    )
}

export default HomePage