import NavButton from '../navButton/NavButton'
import { MyResumeDiv } from './styled_myResume';

const MyResume = () => {
    return (
        <MyResumeDiv>
            <div className="iframe-div">
                <iframe src="Eddie Moger Resume.pdf#zoom=62" title="myResume" width="340px" height="468px"></iframe>
            </div>
            <div className="my-resume">
                <h1>My Resume</h1>
                <div className="button-container">
                    <div className="contact-info">
                        <NavButton buttonText='Contact Info' linkTo='/ContactInfo'/>
                    </div>
                    <div className="home-button">
                        <NavButton buttonText='Home' linkTo='/'/>
                    </div>
                </div>
            </div>
        </MyResumeDiv>
    )
}

export default MyResume;