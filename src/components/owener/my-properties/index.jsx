import { PropertyContainer } from "../../homePage/style";
import MyProperty from "./my-property";

const MyProperties = () => {
    const imgSource = "https://s0.2mdn.net/sadbundle/14800419125408425439/image.jpg";

    return <PropertyContainer>
        <MyProperty id="1" imgSource={imgSource} price="$20,000" area="200 sqft" rooms="3" status="Available" propertyType="House" />
    </PropertyContainer>
}

export default MyProperties;