/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import ConditionalGithubButton from './ConditionalGithubButton';
import { StyledButton } from '../../utils';

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
				noreferer="true" rel="noreferrer">
				<div className="divider" style={{}}>
					<img src={project.thumbnail} alt={project.name} />
				</div>
			</a>
			<div>
				<a href="{project.github}" target="_blank" noreferer="true" noopener="true">
					<div className="title">{project.name}</div>
				</a>
				<div style={{ display: 'flex', margin: '0px 10px' }}>
					<ConditionalGithubButton github={project.github}/>
					<a href={project.link} target="_blank" noreferer="true" noopener="true" rel="noreferrer">
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
