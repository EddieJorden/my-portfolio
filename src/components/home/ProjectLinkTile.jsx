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
		max-width: 60px;
		margin: 5px;
	}

	.divider {
		border-right: 1px solid #dadde1;
		padding: 0px 26px;
	}

	.title {
		margin: 12px;
		color: #1a77f2;
		font-weight: bold;
	}

	a {
		text-decoration: none;
	}

	@media screen and (max-width: 1104px) {
		.divider {
			border-right: 0px;
			padding: 0px 5px;
			border: 0px;
		}

		.title {
			font-size: 16px;
			margin: 5px;
			padding: 0px 5px;
		}
	}
`;

const StyledButton = styled.button`
	font-size: 10px;
	background-color: #1a77f2;
	border-radius: 6px;
	border: 2px solid #1a77f2;
	color: white;
	padding: 0.2vw 0.2vw;
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
				<div className="divider" style={{}}>
					<img src={project.thumbnail} alt={project.name} />
				</div>
			</a>
			<div>
				<a href="{project.github}">
					<div className="title">{project.name}</div>
				</a>
				<div style={{ display: 'flex', margin: '0px 30px' }}>
					<a href={project.github}>
						<div>
							<StyledButton>github</StyledButton>
						</div>
					</a>
					<a href={project.link}>
						<div>
							<StyledButton>project</StyledButton>
						</div>
					</a>
				</div>
			</div>
		</ProjectLinkTileDiv>
	);
};

export default ProjectLinkTile;
