/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyledButton } from '../../utils';

const ConditionalGithubButton = ({github}) => {
	if(github !== undefined) {
		return (
			<div>
				<a href={github}
					target="_blank" noreferer="true" noopener="true" rel="noreferrer"
				>
					<div>
						<StyledButton>github</StyledButton>
					</div>
				</a>
			</div>
		);
	}
	return <></>;
};

export default ConditionalGithubButton;
