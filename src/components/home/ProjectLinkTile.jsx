/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';

const ProjectLinkTileDiv = styled.div`
    display: flex;

    min-width: 100%;
    margin-left: 0px;
    text-align: left;
    background-color: #1a77f2;
    color: white;
    margin: 7px 0px;
    border-radius: 10px;
    padding: 5px;

    img {
        max-width: 78px;
        margin: 5px;
    }
`;

const ProjectLinkTile = ({ project }) => {
	return (
		<ProjectLinkTileDiv>
			<a href={project.link} target="blank" noopener="true" noreferer="true">
				<div><img src={project.thumbnail} alt={project.name}/></div>
			</a>
			<div style={{margin: '5px'}}>
				<a href='{project.github}' style={{textDecoration: 'none', color: 'white', fontWeight: 'heavy'}}><div>{project.name}</div></a>
				<a href='{project.github}' style={{textDecoration: 'none', color: 'white'}}><div><div>github</div></div></a>
			</div>
		</ProjectLinkTileDiv>
	);
};

export default ProjectLinkTile;
