import NewHomeDiv from './NewHomeDiv';
import ContentWindow from './ContentWindow';

import ContactInfo from '../contactInfo/ContactInfo';
import { useState } from 'react'
import MyProjects from '../myProjects/MyProjects';
import Home from '../home/Home';

import styled from 'styled-components';

import AboutMe from '../aboutMe/AboutMe'


const NewHomeButton = styled.button`
    background: transparent;
    border-radius: 6px;
    border: 2px solid #1a77f2;
    color: #1a77f2;
    padding: 0.5vw 1.5vw;
    margin: 4px;
    transition: 375ms;
    :hover {
        cursor: pointer;
        border: 4px solid #1a77f2;
        color: #1a77f2;
        font-weight: bold;
        margin: 2px;
        transition: 375ms
} 
`

const NewHome = () => {
    const [displayedContent, setDisplayedContent] = useState(<Home />)

    const updateDisplayedContent = (target) => {
        setDisplayedContent(target)
    }

    return (
        <NewHomeDiv>
            <div className='nav-div'>
                <NewHomeButton onClick={() => updateDisplayedContent(<ContactInfo />)}>
                    contact info
                </NewHomeButton>
                <NewHomeButton onClick={() => updateDisplayedContent(<MyProjects />)}>
                    my projects
                </NewHomeButton>
                <NewHomeButton onClick={() => updateDisplayedContent(<Home />)}>
                    home
                </NewHomeButton>
                <NewHomeButton onClick={() => updateDisplayedContent(<AboutMe />)}>
                    about me
                </NewHomeButton>
            </div>
            <div className='content-div'>
                <div className='content-container'>
                    <ContentWindow displayedContent={displayedContent}/>
                </div>
            </div>
        </NewHomeDiv>
    )
};

export default NewHome;