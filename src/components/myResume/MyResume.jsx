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
				<img src="Eddie_Moger_Software_Engineer_resume.png" alt="Eddie_Moger_Software_Engineer_Resume" />
				<p>
					click{' '}
					<span>
						<a
							href="Eddie Moger Software Engineer Resume.pdf"
							target="_blank"
							rel="noreferrer"
							title="Eddie Moger's resume"
						>
							here
						</a>{' '}
					</span>
					to view and download the pdf.
				</p>
			</ResumeDiv>
		</MyResumeDiv>
	);
};

export default MyResume;
