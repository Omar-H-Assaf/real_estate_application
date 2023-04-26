import { Button, Input } from "../../shared/style";
import { AddIcon, Content, Header, ListContainer, ListName, Overlay } from "./style";
import add from '../../../assets/icons/add.png';
import { StatusLabel } from "../style";

const Popup = (props) => {

    const closeFunc = (e) => {
        e.preventDefault();
        props.onData(false);
    }

    return (<Overlay>
        <Content>
            <Header>
                <h2>Favorit List</h2>
                <Button onClick={(e) => closeFunc(e)}>Close</Button>
            </Header>
            <ListContainer>
                <Button >Add</Button>
                <ListName>
                    Fav
                </ListName>
            </ListContainer>
            <Header>
                <Input type="text" style={{ width: '20rem' }} placeholder="Add a new List" />
                <Button>Add new list</Button>
            </Header>
        </Content>
    </Overlay>)
}

export default Popup;