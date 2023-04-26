import { PropertyContainer } from "../../homePage/style";
import Application from "./application";

const AllAplication = () => {
    return <PropertyContainer style={{ marginTop: '2rem' }}>
        <Application id="1" price="200" message="ncfjcjnjdncjdncjdncjndjncjdncjdncjdncjdnjcndjcndjcnjdncjdncjdn" date="20/2/22" status="pending" />
        <Application />
        <Application />
        <Application />
    </PropertyContainer>
}

export default AllAplication;