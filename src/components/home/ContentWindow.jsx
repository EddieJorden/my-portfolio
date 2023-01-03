/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import styled from 'styled-components';


const ContentWindowDiv = styled.div`
    width: 100%
`;

const ContentWindow = (props) => {
	

	return (
		<ContentWindowDiv >
			{props.displayedContent}
		</ContentWindowDiv>
	);
};

export default ContentWindow;