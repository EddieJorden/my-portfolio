/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import ComponentDiv from '../componentDiv/ComponentDiv';
import styled from 'styled-components';
import { ShadowedImg } from '../../utils';

const ProjectTileDiv = styled.div`
  display: flex;
  flex-dircetion: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
	height 100%;

  img {
    height: 161px;
    border-radius: 15px;
  }
`;

const ProjectTile = (props) => {
	const { name, thumbnail, altText, github, link } = props.project;

	return (
		<ProjectTileDiv>
			<ComponentDiv>
				<div className={`${name}`}>
					<h3 style={{fontWeight: 'bolder'}}>{name}</h3>
					<a href={link} target="_blank" rel="noreferrer" title="Link to this project">
						<div className="image-container">
							<ShadowedImg src={thumbnail} alt={altText}/>
						</div>
					</a>
					<div className='project-notes'>
						<p style={{margin: '10px'}}>{props.project.notes.notes}</p>
						<p style={{margin: '10px'}}>{props.project.notes.notesLink}</p>
					</div>
					<div>
						{github !== undefined	?	<div style={{margin: '10px'}} className='github-link'>
							this projects <a href={github} target="_blank" rel="noreferrer" title="this projects github">github</a></div> : ''}
					</div>
				</div>
			</ComponentDiv>
		</ProjectTileDiv>
	);
};

export default ProjectTile;