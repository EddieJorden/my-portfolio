import NavButton from '../navButton/NavButton'

const MyResume = () => {
    return (
        <div>
            <h1>My Resume</h1>
            <iframe src="Eddie Moger Resume.pdf#zoom=40" title="myResume" width="340px" height="468px">
            </iframe>
            <div>
                <NavButton buttonText='Contact Info' linkTo='/ContactInfo'/>
                <span>
                    <NavButton buttonText='Home' linkTo='/'/>
                </span>
            </div>
        </div>
    )
}

export default MyResume;