import NavButton from '../navButton/NavButton'
import { MyResumeDiv } from './styled_myResume';

const MyResume = () => {
    return (
        <MyResumeDiv>
            <div class="iframe-div">
                <iframe src="Eddie Moger Resume.pdf#zoom=62" title="myResume" width="340px" height="468px"></iframe>
            </div>
            <div class="my-resume">
                <h1>My Resume</h1>
                <div class="button-container">
                    <div class="contact-info">
                        <NavButton buttonText='Contact Info' linkTo='/ContactInfo'/>
                    </div>
                    <div class="home-button">
                        <NavButton buttonText='Home' linkTo='/'/>
                    </div>
                </div>
            </div>
        </MyResumeDiv>
    )
}

export default MyResume;