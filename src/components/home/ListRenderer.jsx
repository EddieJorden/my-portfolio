import ListTile from "./ListTile";
import styled from 'styled-components';

const ListTileContainer = styled.div`

`

const ListRenderer = ({ myProjectsArray }) => {

    let keyGenerator = 1

    return (
        <ListTileContainer>
            {myProjectsArray.map((each, i) => {
                keyGenerator = keyGenerator + 1
                return <ListTile project={each} key={i}/>
            })}
        </ListTileContainer>
    )
};

export default ListRenderer;
