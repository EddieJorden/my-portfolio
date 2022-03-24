
import styled from 'styled-components';

const ProjectLinkTileDiv = styled.div`
    min-width: 100%;
    margin-left: 0px;
`

const ProjectLinkTile = ({ project }) => {
    return (
        <ProjectLinkTileDiv>
            <a href={project.github} target="blank" noopener noreferer>{project.name}</a>
        </ProjectLinkTileDiv>
    );
};

export default ProjectLinkTile;
