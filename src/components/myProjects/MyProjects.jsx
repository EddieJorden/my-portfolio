import NavButton from "../navButton/NavButton";
import myProjectsArray from "./myProjectsArray";
import MyProjectsDiv from "./MyProjectsDiv";
import ProjectTile from "./ProjectTile";

const MyProjects = () => {

    let keyValue = 0

    return (
        <MyProjectsDiv>
            <div>{myProjectsArray.map(((each) => {
                keyValue = keyValue + 1
                return (
                    <div key={keyValue}>
                        <ProjectTile project={each} />
                    </div>    
                )
            }))}</div>
            <div className="more-coming-soon" style={{marginTop: "42px"}}>
                <h3>more coming soon...</h3>
            </div>
            <div className="button-container" style={{marginBottom: "42px"}}>
                <NavButton buttonText="Home" linkTo='/'/>
            </div>
        </MyProjectsDiv>
    )
};

export default MyProjects;
