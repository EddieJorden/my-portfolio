import { MyResumeDiv } from './styled_myResume';
import styled from 'styled-components';

const ResumeDiv = styled.div`
    img {
        max-height: 100%;
    }
`

const MyResume = () => {
    return (
        <MyResumeDiv>
            <ResumeDiv>
                <img src="resume_thumbnail.png" alt="my-resume-thumbnail"/>
                <p>click <span><a href="Eddie Moger Resume.pdf" >here</a>{" "}</span>to view and download the pdf.</p>
            </ResumeDiv>
        </MyResumeDiv>
    );
};

export default MyResume;