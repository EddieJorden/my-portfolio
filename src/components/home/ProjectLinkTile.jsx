/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';

const ProjectLinkTileDiv = styled.div`
	display: flex;

	min-width: 100%;
	margin-left: 0px;
	text-align: left;

	color: white;
	margin: 7px 0px;
	border-radius: 10px;
	padding: 5px;

	img {
		max-width: 78px;
		margin: 5px;
	}
`;

const StyledButton = styled.button`
	background-color: #1a77f2;
	border-radius: 6px;
	border: 2px solid #1a77f2;
	color: white;
	padding: 0.5vw 1.5vw;
	margin: 4px;
	transition: 375ms;
	font-weight: bold;
	:hover {
		cursor: pointer;
		border: 4px solid #1a77f2;
		color: white;
		font-weight: bold;
		margin: 2px;
		transition: 375ms;
	}
`;

const ProjectLinkTile = ({ project }) => {
	console.log(project);
	return (
		<ProjectLinkTileDiv>
			<a
				href={project.link}
				target="blank"
				noopener="true"
				noreferer="true">
				<div>
					<img src={project.thumbnail} alt={project.name} />
				</div>
			</a>
			<div style={{ margin: '5px' }}>
				<a
					href="{project.github}"
					style={{
						textDecoration: 'none',
						color: '#1a77f2',
						fontWeight: 'bold',
					}}>
					<div>{project.name}</div>
				</a>
				<a href={project.github}>
					<div>
						<StyledButton>github</StyledButton>
					</div>
				</a>
			</div>
		</ProjectLinkTileDiv>
	);
};

export default ProjectLinkTile;
