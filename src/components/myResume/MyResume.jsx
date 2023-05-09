/* eslint-disable react/react-in-jsx-scope */
import { MyResumeDiv } from './styled_myResume';
import styled from 'styled-components';
import { ShadowedImg } from '../../utils';

const ResumeDiv = styled.div`
	img {
		max-height: 100%;
	}
`;

const MyResume = () => {
	return (
		<MyResumeDiv>
			<ResumeDiv>
				<ShadowedImg src="Resume-thumbnail-1.png" alt="Eddie_Moger_Software_Engineer_Resume_page_one" />
				<ShadowedImg src="Resume-thumbnail-2.png" alt="Eddie_Moger_Software_Engineer_Resume_page_two" />
				<p>
					click{' '}
					<span>
						<a
							href="Eddie-Moger-Software-Engineer-Resume.pdf"
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
