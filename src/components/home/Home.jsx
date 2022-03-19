import React from "react";
import { HomeDiv } from "./styled_home";
import ComponentDiv from "../componentDiv/ComponentDiv";

const Home = () => {
    return (
        <HomeDiv>
            <div className="image-div">
                <img src="EddieInTheCity.jpg" alt="Eddie in the city"/>
            </div>
            <div className="contact-div" >
                <ComponentDiv>
                    <div>
                    <div className="name-container">
                        <h1 className="eddie" >Eddie </h1>
                        <h1 className="moger" >Moger </h1>
                    </div>
                    <div className="title">
                        <h3 className="software" >Software </h3>
                        <h3 className="engineer" >Engineer </h3>
                    </div>                
                    </div>
                </ComponentDiv>
            </div>
        </HomeDiv>
    )
};

export default Home;