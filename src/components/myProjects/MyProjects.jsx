import NavButton from "../navButton/NavButton";
import MyProjectsDiv from "./MyProjectsDiv";
import ProjectTile from "./ProjectTile";


const MyProjects = () => {
    return (
        <MyProjectsDiv>
            <ProjectTile />
            <div>
                this portfolio's repository on github <a href="https://github.com/EddieJorden/my-portfolio" rel="noopener noreferer" target="blank">my-portfolio</a>
            </div>
            <div className="more-coming-soon" style={{marginTop: "42px"}}>
                <h3>more coming soon...</h3>
            </div>
            <div class="button-container">
                <NavButton buttonText="Home" linkTo='/'/>
            </div>
        </MyProjectsDiv>
    )
};

export default MyProjects;

