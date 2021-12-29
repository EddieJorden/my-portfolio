import NavButton from '../navButton/NavButton'

const MyResume = () => {
    return (
        <div>
            <h1>My Resume</h1>
            <iframe src="Eddie Moger Resume.pdf" title="myResume" width="100%" height="500px">
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