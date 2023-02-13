/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { StyledButton } from '../../utils';

export const ConditionalGithubButton = ({github}) => {
	console.log(github);
	if(github !== undefined) {
		return (
			<div>
				<a href={github}>
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
