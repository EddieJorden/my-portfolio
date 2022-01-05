import NavButton from '../navButton/NavButton'
import { MyResumeDiv } from './styled_myResume';

const MyResume = () => {
    return (
        <MyResumeDiv>
            <iframe src="Eddie Moger Resume.pdf#zoom=75" title="myResume" width="340px" height="468px"></iframe>
            <div class="my-resume">
                <h1>My Resume</h1>
                <div>
                    <NavButton buttonText='Contact Info' linkTo='/ContactInfo'/>
                    <span>
                        <NavButton buttonText='Home' linkTo='/'/>
                    </span>
                </div>
            </div>
        </MyResumeDiv>
    )
}

export default MyResume;