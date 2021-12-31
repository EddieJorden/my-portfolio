import React, { Component } from "react";
import NavButton from "../navButton/NavButton";

class Home extends Component {

    render() {
        return (
                <table>
                    <tbody>
                        <tr>
                            <td >
                                <div style={{backgroundColor: 'red', padding: '15px', margin: '15px', textAlign: 'right'}}>
                                    <h1 style={{lineHeight: '20px'}}>Eddie Moger</h1>
                                    <h3 style={{lineHeight: '1px'}}>Software Engineer</h3>
                                    <p style={{lineHeight: '1px'}}>based out of Silicon Valley</p>
                                </div>
                                <div ><NavButton style={{alignItems: 'right'}} buttonText="Contact Info" linkTo='/ContactInfo'/><span><NavButton buttonText="Resume" linkTo='/Resume'/></span></div>
                            </td>
                            <td>
                                <div>
                                    <img src="/PXL_20210320_171356477.jpeg" alt="me apreciating ancient knowledge" style={{maxHeight: "61vh", margin: "61px"}}/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
        )
    }
};

export default Home;