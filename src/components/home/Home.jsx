import React from "react";
import NavButton from "../navButton/NavButton";
import { HomeDiv } from "./styled_home";
import ComponentDiv from "../componentDiv/ComponentDiv";

const Home = () => {
    return (
        <HomeDiv>
            <div className="image-div">
                <img src="EddieinTheCity.jpg" alt="Eddie in the city"/>
            </div>
            <div className="contact-div" >
                <ComponentDiv>
                    <ul>
                    <h1 className="eddie" >Eddie </h1>
                    <h1 className="moger" >Moger </h1>
                    <div className="title">
                        <h3 className="software" >Software </h3>
                        <h3 className="engineer" >Engineer </h3>
                    </div>                
                    <div className="button-container-container">
                        <div className="button-container">
                            <NavButton buttonText="About Me" linkTo='/AboutMe'/>
                        </div>
                        <div className="button-container">
                            <NavButton buttonText="Contact Info" linkTo='/ContactInfo'/>
                        </div>
                        <div className="button-container">
                            <NavButton buttonText="My Projects" linkTo='/MyProjects'/>
                        </div>
                    </div>
                    </ul>
                </ComponentDiv>
            </div>
        </HomeDiv>
    )
};

export default Home;