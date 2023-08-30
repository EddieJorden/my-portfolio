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
				<p>
					click{' '}
					<span>
						<a
							href="Software-Engineer-Resume-May-2023.pdf"
							target="_blank"
							rel="noreferrer"
							title="Eddie Moger's resume"
						>
							here
						</a>{' '}
					</span>
					to view and download the pdf.
				</p>
				<ShadowedImg src="Resume-thumbnail-1.png" alt="Eddie_Moger_Software_Engineer_Resume_page_one" />
				<ShadowedImg src="Resume-thumbnail-2.png" alt="Eddie_Moger_Software_Engineer_Resume_page_two" />

			</ResumeDiv>
		</MyResumeDiv>
	);
};

export default MyResume;
