import React, { Component } from "react";
import NavButton from "../navButton/NavButton";
import { HomeDiv } from "./styled_home"
import styled from "styled-components";



const Home = () => {
    return (
        <HomeDiv>
            <div class="image-div">
                <img src="EddieInTheCity.jpeg" alt="Eddie in the city"/>
            </div>
            <div class="contact-div" >
                <list>
                    <ul><h1 class="eddie" >Eddie </h1></ul>
                    <ul><h1 class="moger" >Moger </h1></ul>
                    <ul>
                        <div class="title">
                            <h3 class="software" >Software </h3>
                            <h3 class="engineer" >Engineer </h3>
                        </div>
                    </ul>
                </list>
                <div style={{maxWidth: '100px', margin: 'auto'}}>
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