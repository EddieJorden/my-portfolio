
import ComponentDiv from "../componentDiv/ComponentDiv";



const ProjectTile = () => {
    return (
        <ComponentDiv>
            <div className="food.near.me">
                <h1>food near me</h1>
                <a href="https://eddiejorden.github.io/food.near.me/" target="blank" rel="noopener noreferer">
                    <div class="image-container">
                        <img src="food_near_me_thumbnail.png" alt="homepage_thumbnail_for_food.near.me"/>
                    </div>
                </a>
                <div>
                    <a href="https://eddiejorden.github.io/food.near.me/" target="blank" rel="noopener noreferer">food near me</a>
                </div>
                <div>
                    <p>you must enable CORS anywhere to use this development app <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="blank" rel="noopener noreferer">cors-anywhere</a></p>
                </div>
                <div>
                    <a href="https://github.com/EddieJorden/food.near.me" target="blank" rel="noopener noreferer">this projects github</a>
                </div>
            </div>
        </ComponentDiv>
    )
};

export default ProjectTile;