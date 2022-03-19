import { MyResumeDiv } from './styled_myResume';

const MyResume = () => {
    return (
        <MyResumeDiv>
            <div className="iframe-div">
                <iframe src="Eddie Moger Resume.pdf#zoom=41" title="myResume" width="340px" height="100%"></iframe>
            </div>
        </MyResumeDiv>
    )
}

export default MyResume;