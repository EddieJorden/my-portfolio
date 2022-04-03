/* eslint-disable react/react-in-jsx-scope */
import myProjectsArray from './myProjectsArray';
import ProjectTile from './ProjectTile';
import styled from 'styled-components';

const MyProjectsDiv = styled.div`
    display: flex,
    alignItems: center,
    flexDirection: column;
    justify-content: center;
    overflow: scroll;
    width: 100%;
    margin: auto;
    color: #1a77f2;

  .project-tile-containter {
      width: 100vw;
      display: flex;
      flex-direction: column;
  }
`;

const MyProjects = () => {
	let keyValue = 0;
	return (
		<MyProjectsDiv>
			<div>{myProjectsArray.map(((each) => {
				keyValue = keyValue + 1;
				return (
					<div className="project-tile-container" key={keyValue}>
						<ProjectTile project={each} />
					</div>    
				);}))}
			</div>
			<div>
				<h3>more coming soon...</h3>
			</div>
		</MyProjectsDiv>
	);
};

export default MyProjects;
