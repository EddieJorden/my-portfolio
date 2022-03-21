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
import ComponentDiv from '../componentDiv/ComponentDiv';

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

const NavProfileDivContainer = styled.div`
    min-width: 100%;
    height: 20%;
    flex-grow: .2;
    width: 100%;
`

const NavLinksDiv = styled.div`
    flex-grow: 1;
    width: 100%;
`

const NavFooterDiv = styled.div`
    flex-grow: .2;
    width: 100%;
`

const ProfileDiv = styled.div`
    height: 61%;
`

const NavigationDiv = styled.div`
`

const NavLinksContainer = styled.div`

`

const NavLinksListDiv = styled.ul`
    text-align: left;
`

const ContentDiv = styled.div`

    color: white;
    width: 61.8vw;
    min-height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        width: 100vw;
        max-height: 92%;
    }
`

const ContentWindowDiv = styled.div`
    max-width: 80vw;
    max-height: 80vh;
    background-color: white;
    color: black;
    overflow: scroll;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: -webkit-center;
`

const ContentWindowWrapper = styled.div`
    height: 95%;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 900px) {
        width: 100%;
        height: 100%;
    }
`

const NewHome = ({ myProjectsArray }) => {
    const [displayedContent, setDisplayedContent] = useState(<Home />)
    const updateDisplayedContent = (target) => {
        setDisplayedContent(target)
    }

    return (
        <NewHomeDiv>
            <div className='nav-div'>
                <NavProfileDivContainer>
                    <ProfileDiv>
                        <ProfileComponent/>
                    </ProfileDiv>
                </NavProfileDivContainer>
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
            <ContentDiv>
                <ContentWindowWrapper>
                    <ComponentDiv>
                        <ContentWindowDiv>
                            <ContentWindow displayedContent={displayedContent}/>
                        </ContentWindowDiv>
                    </ComponentDiv>
                </ContentWindowWrapper>
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
            </ContentDiv>
        </NewHomeDiv>
    )
};

export default NewHome;
