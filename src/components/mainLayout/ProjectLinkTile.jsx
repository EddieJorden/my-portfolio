/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import ConditionalGithubButton from './ConditionalGithubButton';
import { ShadowedImg, StyledButton } from '../../utils';

import styled from 'styled-components';

const ProjectLinkTileDiv = styled.div`
	display: flex;

	min-width: 100%;
	margin-left: 0px;
	text-align: left;

	color: white;
	margin: 0px 0px;
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



const ProjectLinkTile = ({ project }) => {

	return (
		<ProjectLinkTileDiv>
			<a
				href={project.link}
				target="_blank"
				noopener="true"
				noreferer="true" rel="noreferrer"
				title="Link to this project"
			>
				<div className="divider" style={{}}>
					<ShadowedImg src={project.thumbnail} alt={project.name} />
				</div>
			</a>
			<div>
				<a href={project.github} target="_blank" rel="noopener noreferrer" title="This projects Github repository">
					<div className="title">{project.name}</div>
				</a>
				<div style={{ display: 'flex', margin: '0px 10px' }}>
					<ConditionalGithubButton github={project.github}/>
					<a href={project.link} target="_blank" rel="noreferrer" title="This projects live link">
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
