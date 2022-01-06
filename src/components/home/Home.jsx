import React, { Component } from "react";
import NavButton from "../navButton/NavButton";
import { HomeDiv } from "./styled_home"

class Home extends Component {

    render() {
        return (
            <HomeDiv>
                <div class="image-div">
                    <img src="EddieInTheCity.jpeg" alt="Eddie in the city"/>
                </div>
                <div class="home-div">
                    <list>
                        <ul><h1 class="eddie" >Eddie </h1></ul>
                        <ul><h1 class="moger" >Moger </h1></ul>
                        <ul><h3 class="software" >Software </h3></ul>
                        <ul><h3 class="engineer" >Engineer </h3></ul>
                    </list>
                    <div class="button-div">
                        <NavButton buttonText="More Info" linkTo='/ContactInfo'/>
                    </div>
                </div>
            </HomeDiv>
        )
    }
};

export default Home;