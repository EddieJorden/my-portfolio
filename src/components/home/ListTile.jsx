
import styled from 'styled-components';

const ListTileDiv = styled.div`

`

const ListTile = ({ project }) => {
    return (
        <ListTileDiv>
            <a href={project.github} target="blank" noopener noreferer>{project.name}</a>
        </ListTileDiv>
    );
};

export default ListTile;
