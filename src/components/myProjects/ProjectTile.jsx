
import ComponentDiv from "../componentDiv/ComponentDiv";
import styled from "styled-components";

const ProjectTileDiv = styled.div`
    img {
        height: 161px;
        border-radius: 15px;
    }
`

const ProjectTile = (props) => {

    return (
        <ProjectTileDiv>
            <ComponentDiv>
                <div className={`${props.project.name}`}>
                    <h1 style={{fontWeight: 'bolder'}}>{props.project.name}</h1>
                    <a href={props.project.link} target="blank" rel="noopener noreferer">
                        <div className="image-container">
                            <img src={props.project.thumbnail} alt={props.project.altText}/>
                        </div>
                    </a>
                    <div className='project-notes'>
                        <p>{props.project.notes}</p>
                    </div>
                    <div className='github-link'>
                        this projects <a href={props.project.github} target="blank" rel="noopener noreferer" >github</a>
                    </div>
                </div>
            </ComponentDiv>
        </ProjectTileDiv>
    )
};

export default ProjectTile;