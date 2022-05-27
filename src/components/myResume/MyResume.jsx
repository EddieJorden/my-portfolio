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
				<img src="Eddie Moger Software Engineer Resume page 1.png" alt="my-resume-thumbnail"/>
				<img src="Eddie Moger Software Engineer Resume page 2.png" alt="my-resume-thumbnail"/>
				<p>click <span><a href="Eddie Moger Software Engineer Resume.pdf" target="blank">here</a>{' '}</span>to view and download the pdf.</p>
			</ResumeDiv>
		</MyResumeDiv>
	);
};

export default MyResume;