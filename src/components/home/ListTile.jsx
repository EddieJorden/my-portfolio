
import styled from 'styled-components';

const ListTileDiv = styled.div`
    min-width: 100%;
`

const ListTile = ({ project }) => {
    return (
        <ListTileDiv>
            <a href={project.github} target="blank" noopener noreferer>{project.name}</a>
        </ListTileDiv>
    );
};

export default ListTile;
