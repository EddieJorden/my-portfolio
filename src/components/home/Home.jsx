import React, { Component } from "react";
import NavButton from "../navButton/NavButton";
import { HomeDiv } from "./styled_home";

const Home = () => {
    return (
        <HomeDiv>
            <div class="image-div">
                <img src="EddieInTheCity.jpeg" alt="Eddie in the city"/>
            </div>
            <div class="contact-div" >
                    <ul>
                    <h1 class="eddie" >Eddie </h1>
                    <h1 class="moger" >Moger </h1>
                    
                        <div class="title">
                            <h3 class="software" >Software </h3>
                            <h3 class="engineer" >Engineer </h3>
                        </div>
                    </ul>
                
                <div>
                    <div class="button-container">
                        <NavButton buttonText="About Me" linkTo='/AboutMe'/>
                    </div>
                    <div class="button-container">
                        <NavButton buttonText="Contact Info" linkTo='/ContactInfo'/>
                    </div>
                    <div class="button-container">
                        <NavButton buttonText="My Projects" linkTo='/MyProjects'/>
                    </div>
                </div>
            </div>
        </HomeDiv>
    )
};

export default Home;