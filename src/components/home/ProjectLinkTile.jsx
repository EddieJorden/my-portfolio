
import styled from 'styled-components';

const ProjectLinkTileDiv = styled.div`
    min-width: 100%;
    margin-left: 0px;
    text-align: left;

    img {
        max-width: 78px;
        margin: 5px;
    }
`

const ProjectLinkTile = ({ project }) => {
    return (
        <ProjectLinkTileDiv>
            <a href={project.link} target="blank" noopener="true" noreferer="true"><span><img src={project.thumbnail}/></span>{project.name}</a>
        </ProjectLinkTileDiv>
    );
};

export default ProjectLinkTile;
