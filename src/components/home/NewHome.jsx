import NewHomeDiv from './NewHomeDiv';
import ContentWindow from './ContentWindow';
import MyResume from '../myResume/MyResume'
import ContactInfo from '../contactInfo/ContactInfo';
import { useState } from 'react'
import MyProjects from '../myProjects/MyProjects';
import Home from '../home/Home';
import styled from 'styled-components';
import AboutMe from '../aboutMe/AboutMe';
import ProfileComponent from '../profileComponent/ProfileComponent';
import ListRenderer from './ListRenderer';

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

const NavProfileDiv = styled.div`
    min-width: 100%;
    height: 20%;
    flex-grow: 1;
    color: blue;
    width: 100%;


    @media only screen and (max-width: 900px) {
        display: none;
    }
`

const NavLinksDiv = styled.div`

    flex-grow: 1;
    width: 100%;
    @media only screen and (max-width: 900px) {
        display: none;
    }
`

const NavFooterDiv = styled.div`

    flex-grow: 1;
    width: 100%;


    @media only screen and (max-width: 900px) {
        display: none;
    }
`

const ProfileDiv = styled.div`
    color: blue;
    height: 61%;
`

const NavigationDiv = styled.div`
    color: blue;

    min-width: 100%;
`

const NavLinksContainer = styled.div`
    color: blue;
`

const NavLinksListDiv = styled.ul`
    text-align: left;
`

const NewHome = ({ myProjectsArray }) => {
    const [displayedContent, setDisplayedContent] = useState(<Home />)

    const updateDisplayedContent = (target) => {
        setDisplayedContent(target)
    }

    return (
        <NewHomeDiv>
            <div className='nav-div'>
                <NavProfileDiv>
                    <ProfileDiv>
                        <ProfileComponent/>
                    </ProfileDiv>
                </NavProfileDiv>
                <NavigationDiv>
                    <NewHomeButton onClick={() => updateDisplayedContent(<ContactInfo />)}>
                        Contact
                    </NewHomeButton>
                    <NewHomeButton onClick={() => updateDisplayedContent(<Home />)}>
                        Home
                    </NewHomeButton>
                    <NewHomeButton onClick={() => updateDisplayedContent(<MyProjects />)}>
                        My Projects
                    </NewHomeButton>
                    <NewHomeButton onClick={() => updateDisplayedContent(<MyResume />)}>
                        My Resume
                    </NewHomeButton>
                    <NewHomeButton onClick={() => updateDisplayedContent(<AboutMe />)}>
                        About Me
                    </NewHomeButton>
                </NavigationDiv>
                <NavLinksDiv>
                    <NavLinksContainer>
                        <h3>my projects</h3>
                        <NavLinksListDiv>
                            <ListRenderer myProjectsArray={myProjectsArray}/>
                        </NavLinksListDiv>
                    </NavLinksContainer>
                </NavLinksDiv>
                <NavFooterDiv>
                    <h3>contact info</h3>
                </NavFooterDiv>
            </div>
            <div className='content-div'>
                <div className='content-window'>
                    <ContentWindow displayedContent={displayedContent}/>
                </div>
            </div>
        </NewHomeDiv>
    )
};

export default NewHome;