/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import ProjectLinkTile from './ProjectLinkTile';

const ProjectsRenderer = ({ myProjectsArray }) => {
	let keyGenerator = 1;

	return (
		<div>
			{myProjectsArray.map((each, i) => {
				if(i < 5) {
					keyGenerator = keyGenerator + 1;
					return <ProjectLinkTile project={each} key={i}/>;
				} return null;  
			})}
		</div>
	);
};

export default ProjectsRenderer;
