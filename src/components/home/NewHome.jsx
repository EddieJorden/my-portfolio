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
import ProjectsRenderer from './ProjectsRenderer';
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

const SideBarProfileDivContainer = styled.div`
    margin: 15px;

    @media only screen and (max-width: 900px) {
        display: none;
    }

`

const ProjectLinksDiv = styled.div`
    flex-grow: 1;
    margin: 15px;
`

const SideBarFooterDiv = styled.div`
    flex-grow: 1;
    min-width: 100%;
`

const SideBarFooterContainer = styled.div`
    min-width: 100%;
`

const ProfileDiv = styled.div`

`

const NavigationDiv = styled.div`
    min-width: 100%;
`

const SideBarLinksContainer = styled.div`
    @media only screen and (max-width: 900px) {
        display: none;
    }
`

const ProjectLinksListDiv = styled.div`

    margin-left: none;
`

const SideBarDivContainer = styled.div`
    max-width: 95%;
    max-height: 95%;
    min-width: 95%;
    min-height: 95%;
    display: flex;
    flex-direction: column;
    alight-items: center;
    justify-content: center;
`

const SideBarDiv = styled.div`
    color: #1a77f2;
    width: 38%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        min-width: 100%;
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
        width: 100%;
    }
`

const ContentWindowDiv = styled.div`
    max-height: 80vh;
    background-color: white;
    color: black;
    overflow: scroll;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: -webkit-center;
    max-width: 100%;
`

const ContentWindowWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    min-width: 85%;
    min-height: 95%

    @media only screen and (max-width: 900px) {

    }
`

const NewHome = ({ myProjectsArray }) => {
    const [displayedContent, setDisplayedContent] = useState(<Home />)
    const updateDisplayedContent = (target) => {
        setDisplayedContent(target)
    }

    return (
        <NewHomeDiv>
            <SideBarDiv>
                <SideBarDivContainer>

                    <SideBarProfileDivContainer>
                        <ComponentDiv>
                            <ProfileDiv>
                                <ProfileComponent/>
                            </ProfileDiv>
                        </ComponentDiv>
                    </SideBarProfileDivContainer>

                    <SideBarLinksContainer>
                        <ProjectLinksDiv>
                            <ComponentDiv>
                                <ProjectLinksListDiv>
                                    <h3>my projects</h3>
                                    <ProjectsRenderer myProjectsArray={myProjectsArray}/>
                                </ProjectLinksListDiv>
                            </ComponentDiv>
                        </ProjectLinksDiv>
                    </SideBarLinksContainer>

                    <SideBarFooterContainer>
                        <SideBarFooterDiv>
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
                        </SideBarFooterDiv>
                    </SideBarFooterContainer>

                </SideBarDivContainer>
            </SideBarDiv>

            <ContentDiv>
                <ContentWindowWrapper>
                    <ComponentDiv>
                        <ContentWindowDiv>
                            <ContentWindow displayedContent={displayedContent}/>
                        </ContentWindowDiv>
                    </ComponentDiv>
                </ContentWindowWrapper>
            </ContentDiv>
        </NewHomeDiv>
    )
};

export default NewHome;
