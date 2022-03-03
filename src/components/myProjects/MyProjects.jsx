import NavButton from "../navButton/NavButton";
import myProjectsArray from "./myProjectsArray";
import MyProjectsDiv from "./MyProjectsDiv";
import ProjectTile from "./ProjectTile";




const MyProjects = (props) => {
    console.log('props', props)
    console.log('myProjectsArray', props.myProjectsArray[0].name)

    return (
        <MyProjectsDiv>
            <div>{myProjectsArray.map(((each) => {
                return (
                    <div>
                        <ProjectTile project={each}/>
                    </div>    
                )
            }))}</div>
            {/* <ProjectTile myProjectsArray={props.myProjectsArray[0]}/>
            <div>
                this portfolio's repository on github <a href="https://github.com/EddieJorden/my-portfolio" rel="noopener noreferer" target="blank">my-portfolio</a>
            </div>
            <div className="more-coming-soon" style={{marginTop: "42px"}}>
                <h3>more coming soon...</h3>
            </div>
            <div class="button-container">
                <NavButton buttonText="Home" linkTo='/'/>
            </div> */}
        </MyProjectsDiv>
    )
};

export default MyProjects;

