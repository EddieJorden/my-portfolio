import NavButton from "../navButton/NavButton";
import MyProjectsDiv from "./MyProjectsDiv";

const MyProjects = () => {
    return (
        <MyProjectsDiv>
            <div className="food.near.me">
                <h1>food.near.me</h1>
                <a href="https://eddiejorden.github.io/food.near.me/" rel="noopener noreferer">
                    <img src="food.near.me.thumbnail.png" alt="homepage_thumbnail_for_food.near.me"/>
                </a>
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

