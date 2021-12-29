import React, { Component } from "react";
import NavButton from "../navButton/NavButton";
// import * as THREE from "three";
// import componentDidMount from 'react';

class Home extends Component {

      render() {
        return (
            <div>
                <h1>This is the Home Page</h1>
                <div>
                    <img src="/PXL_20210320_171356477.jpeg" style={{maxHeight: "80vh"}}/>
                </div>
                <div>
                    <div><NavButton buttonText="Contact Info" linkTo='/ContactInfo'/><span><NavButton buttonText="Resume" linkTo='/Resume'/></span></div>
                </div>
            </div>
        )
      }
    
};

export default Home;