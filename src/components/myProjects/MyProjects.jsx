import NavButton from "../navButton/NavButton";
import MyProjectsDiv from "./MyProjectsDiv";

const MyProjects = () => {
    return (
        <MyProjectsDiv>
            <div className="food.near.me">
                <h1>food-near-me</h1>
                <a href="https://eddiejorden.github.io/food.near.me/" target="blank" rel="noopener noreferer">
                    <img src="food_near_me_thumbnail.png" alt="homepage_thumbnail_for_food.near.me"/>
                </a>
                <p>you must enable CORS anywhere to use this development app <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="blank" rel="noopener noreferer">cors-anywhere</a></p>
            </div>
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

