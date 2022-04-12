/* eslint-disable react/react-in-jsx-scope */
import { MyResumeDiv } from './styled_myResume';
import styled from 'styled-components';

const ResumeDiv = styled.div`
    img {
        max-height: 100%;
    }
`;

const MyResume = () => {
	return (
		<MyResumeDiv>
			<ResumeDiv>
				<img src="My-Resume-Thumbnail.png" alt="my-resume-thumbnail"/>
				<p>click <span><a href="Eddie Moger Resume.pdf" target="blank">here</a>{' '}</span>to view and download the pdf.</p>
			</ResumeDiv>
		</MyResumeDiv>
	);
};

export default MyResume;