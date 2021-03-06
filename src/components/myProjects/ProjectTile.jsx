/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import ComponentDiv from '../componentDiv/ComponentDiv';
import styled from 'styled-components';

const ProjectTileDiv = styled.div`
  display: flex;
  flex-dircetion: column;
  justify-content: center;
  align-items: center;
  margin: 15px;

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
					<h1 style={{fontWeight: 'bolder'}}>{name}</h1>
					<a href={link} target="blank" >
						<div className="image-container">
							<img src={thumbnail} alt={altText}/>
						</div>
					</a>
					<div className='project-notes'>
						<p>{props.project.notes.notes}</p>
						<p>{props.project.notes.notesLink}</p>
					</div>
					<div className='github-link'>
                        this projects <a href={github} target="blank"  >github</a>
					</div>
				</div>
			</ComponentDiv>
		</ProjectTileDiv>
	);
};

export default ProjectTile;