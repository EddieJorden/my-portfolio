import React, { Component } from "react";
import NavButton from "../navButton/NavButton";
import styled from 'styled-components'

const HomeDiv = styled.div`
    .container {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 1rem;
        grid-auto-flow: row;
    }

    h1 {
        text-shadow: 1px 1px white, 1px 1px white, 1px 1px white, 1px 1px white,;
    }

    @media (max-width: 375px) {
        img {
            width: 200%;
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
            margin-bottom: 50px
        }

        .info {
            margin: 0px;
            padding: 0px;
        }
    }

    @media (min-width: 376px) and (max-width: 1079px) {
        .container {
            grid-template-column: 1fr 1fr;
            grid-template-rows: 1fr;
        }

        img {
            width: 100%;
        }

        h1 {
            color: red;
            grid-column: 2 / span 1;
            grid-row:
        }
    }

    @media (min-width: 1080px) {
        img {
            width: 100%;
        }
    }
`

class Home extends Component {

    render() {
        return (
            <HomeDiv>
                <div class="container">
                    <img src="/PXL_20210320_171356477.jpeg" alt="me apreciating ancient knowledge" />
                </div>
                <div class="info" style={{ padding: '15px', margin: '15px', textAlign: 'right' }}>
                    <h1 class="eddie" style={{ lineHeight: '7px', fontSize: '52px' }}>Eddie </h1>
                    <h1 class="moger" style={{ lineHeight: '7px', fontSize: '52px' }}>Moger</h1>
                    <h3 class="software" style={{ lineHeight: '1px' }}>Software</h3>
                    <h3 style={{ lineHeight: '0px' }}>Engineer</h3>
                </div>
                <div>
                    <NavButton buttonText="More Info" linkTo='/ContactInfo'/>
                </div>
            </HomeDiv>
        )
    }
};

export default Home;