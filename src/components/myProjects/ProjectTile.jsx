
import ComponentDiv from "../componentDiv/ComponentDiv";



const ProjectTile = (props) => {
    console.log('props in project tile', props.project)
    // console.log('props.project', props.myProjectsArray.name)


    
    return (
        <ComponentDiv>
            <div className={`${props.project.name}`}>
                <h1>{props.project.name}</h1>
                <a href={props.project.link} target="blank" rel="noopener noreferer">
                    <div class="image-container">
                        <img src={props.project.thumbnail} alt="alt text here"/>
                    </div>
                </a>

                <div>
                    <p>{props.project.notes}</p>
                </div>
                <div>
                    <a href={props.project.github} target="blank" rel="noopener noreferer">this projects github</a>
                </div>
            </div>
        </ComponentDiv>
    )
};

export default ProjectTile;