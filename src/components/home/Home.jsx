import React, { Component } from "react";
import NavButton from "../navButton/NavButton";
import styled from 'styled-components'

const HomeDiv = styled.div`
    @media (max-width: 375px) {
        img {
            width: 100%;
            align-items: center;
            margin-bottom: 0px;
        }
        
        h1 {
            font-size: 12px;
            color: #5FFAC5
            font-shadow: 3px 
        }

        h3 {
            margin-bottom: 0px;
        }

        .eddie {
            margin: top: 0px;
        }

        .moger {
            margin-bottom: 35px
        }

        .info {
            margin: 0px;
            padding: 0px;
        }
    }
`

class Home extends Component {

    render() {
        return (
            <HomeDiv>
                <div>
                    <img src="/PXL_20210320_171356477.jpeg" alt="me apreciating ancient knowledge" style={{ maxHeight: "80vh", maxWidth: "100%" }}/>
                </div>
                <div class="info" style={{ padding: '15px', margin: '15px', textAlign: 'right' }}>
                    <h1 class="eddie" style={{ lineHeight: '7px', fontSize: '52px' }}>Eddie </h1>
                    <h1 class="moger" style={{ lineHeight: '7px', fontSize: '52px' }}>Moger</h1>
                    <h3 class="software" style={{ lineHeight: '1px' }}>Software</h3>
                    <h3 style={{ lineHeight: '0px' }}>Engineer</h3>
                </div>
                <div>
                    <div>
                        <NavButton buttonText="Contact Info" linkTo='/ContactInfo'/>
                    </div>
                    <span>
                        <div>
                        <NavButton buttonText="Resume" linkTo='/Resume'/>
                        </div>
                    </span>
                </div>
            </HomeDiv>
        )
    }
};

export default Home;