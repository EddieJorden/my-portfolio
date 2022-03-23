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
    margin: 15px;
`

const NavLinksDiv = styled.div`
    flex-grow: 1;

    margin: 15px;
`

const NavFooterDiv = styled.div`
    flex-grow: 1;
    margin: 15px;
`

const NavFooterContainer = styled.div`
    

`

const ProfileDiv = styled.div`


`

const NavigationDiv = styled.div`
`

const NavLinksContainer = styled.div`

`

const NavLinksListDiv = styled.ul`

`

const NavDivContainer = styled.div`
    max-width: 95%;
    max-height: 95%;
    min-width: 95%;
    min-height: 95%;
    display: flex;
    flex-direction: column;
    alight-items: center;
    justify-content: center;
`

const NavDiv = styled.div`
    color: #1a77f2;
    width: 38%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        display: none;
    }
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
    height: 90%;
    width: 90%;
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
            <NavDiv>
                <NavDivContainer>
                    <NavProfileDivContainer>
                        <ComponentDiv>
                            <ProfileDiv>
                                <ProfileComponent/>
                            </ProfileDiv>
                        </ComponentDiv>
                    </NavProfileDivContainer>
                    <NavLinksContainer>
                        <NavLinksDiv>
                            <ComponentDiv>
                            <NavLinksListDiv>
                                <h3>my projects</h3>
                                <ListRenderer myProjectsArray={myProjectsArray}/>
                            </NavLinksListDiv>
                            </ComponentDiv>
                        </NavLinksDiv>
                    </NavLinksContainer>
                    <NavFooterContainer>
                        <NavFooterDiv>
                            <ComponentDiv>
                                <h3>contact info</h3>
                            </ComponentDiv>
                        </NavFooterDiv>
                    </NavFooterContainer>
                </NavDivContainer>
            </NavDiv>
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
