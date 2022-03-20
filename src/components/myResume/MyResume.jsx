import { MyResumeDiv } from './styled_myResume';
import NavButton from '../navButton/NavButton';
import styled from 'styled-components';

const ResumeDiv = styled.div`
    img {
        max-height: 100%;
        overflow: scroll;
    }
`

const MyResume = () => {
    return (
        <MyResumeDiv>
            <ResumeDiv>
                <img src="resume_thumbnail.png"/>

            <p>click <span><a href="Eddie Moger Resume.pdf" >
                    here
                </a>{" "}</span>to view and download the pdf.</p>
            </ResumeDiv>
        </MyResumeDiv>
    );
};

export default MyResume;