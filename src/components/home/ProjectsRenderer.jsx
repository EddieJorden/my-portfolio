import ProjectLinkTile from "./ProjectLinkTile";
import styled from 'styled-components';

const ProjectTileContainer = styled.div`

`

const ProjectsRenderer = ({ myProjectsArray }) => {

    let keyGenerator = 1

    return (
        <ProjectTileContainer>
            {myProjectsArray.map((each, i) => {
                keyGenerator = keyGenerator + 1
                return <ProjectLinkTile project={each} key={i}/>
            })}
        </ProjectTileContainer>
    )
};

export default ProjectsRenderer;
