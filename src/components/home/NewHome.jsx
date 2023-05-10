/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import NewHomeDiv from './NewHomeDiv';
import ContentWindow from './ContentWindow';
import MyResume from '../myResume/MyResume';
import ContactInfo from '../contactInfo/ContactInfo';
import MyProjects from '../myProjects/MyProjects';
import Home from '../home/Home';
import styled from 'styled-components';
import AboutMe from '../aboutMe/AboutMe';
import Services from '../services/Services';
import ProfileComponent from '../profileComponent/ProfileComponent';
import ProjectsRenderer from './ProjectsRenderer';
import ComponentDiv from '../componentDiv/ComponentDiv';
import Certifications from '../certifications/Certifications';
// import Blog from '../blog/Blog';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { NavButton } from '../../utils';
import { useRef } from 'react';

const SideBarProfileDivContainer = styled.div`
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

const ProjectLinksDiv = styled.div`
	flex-grow: 1;
`;

const SideBarFooterDiv = styled.div`
	flex-grow: 1;
	min-width: 100%;
`;

const SideBarFooterContainer = styled.div`

`;

const ProfileDiv = styled.div``;

const NavigationDiv = styled.nav`
@media only screen and (max-width: 1015px) {
	display: none;
}
`;

const HamburgerMenuDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 10px;

	@media only screen and (min-width: 1016px) {
		display: none;

	}`;

const SideBarLinksContainer = styled.div`
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

const ProjectLinksListDiv = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: none;
	justif-content: center;
	align-items: flex-start;
`;

const SideBarDivContainer = styled.div`
	max-width: 95%;
	max-height: 95%;
	min-width: 95%;
	min-height: 95%;
	display: flex;
	flex-direction: column;
	alight-items: center;
	justify-content: center;
`;

const SideBarDiv = styled.div`
	color: #1a77f2;
	width: 38%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 900px) {
		min-width: 100%;
	}
`;

const ContentDiv = styled.div`
	color: white;
	width: 61.8vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 900px) {
		width: 100%;
	}
`;

const ContentWindowDiv = styled.div`
	color: black;
	overflow: scroll;
	setScrollPosition: 0;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	text-align: -webkit-center;
	max-width: 100%;
	height: 80vh;
`;

const ContentWindowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	min-width: 100%;
`;

const ButtonContainer = styled.div`
	padding: 10px
`;

const TitleDiv = styled.div`
color: #ffffff;
font-weight: bold;


border-radius: 5px;

display: flex;
justify-content: center;
align-items: center;

img {
	margin: 5px 20px;
	width: 50px;
	border-radius: 5px;
}
`;

const NewHome = ({ myProjectsArray }) => {
	const navigate = useNavigate();

	const contentRef = useRef(null);

	const updateDisplayedContent = (path, state) => {
		navigate(path, { state: state });
		contentRef.current.scrollTop = 0;
	};

	const title = 'EddieMoger.com';

	console.log(useRef(null));

	return (
		<div>
			<header>
				<TitleDiv><img src='detailed-upscaled-logo.png' alt='EddieMoger.com high resolution logo'/><span><h1 style={{color: 'white', margin: '0px'}}>{title}</h1></span></TitleDiv>
				<HamburgerMenuDiv>
					<HamburgerMenu updateDisplayedContent={updateDisplayedContent}/>
				</HamburgerMenuDiv>
				<NavigationDiv>
					<ButtonContainer>
						<NavButton
							onClick={() =>
								updateDisplayedContent(
									'/contactInfo',
									{section: 'contactInfo'}
								)
							}
							href="#contactInfo"
							aria-label="Contact"
						>
											Contact
						</NavButton>
						<NavButton
							onClick={() =>
								updateDisplayedContent(
									'/myProjects',
									{section: 'myProjects'}
								)
							}
							href="#myProjects"
							aria-label="Projects"
						>
											Projects
						</NavButton>
						<NavButton
							onClick={() =>
								updateDisplayedContent(
									'/resume',
									{section: 'resume'}
								)
							}
							href="#resume"
							aria-label="Resume"
						>
											Resume
						</NavButton>
						<NavButton
							onClick={() =>
								updateDisplayedContent(
									'aboutme',
									{section: 'aboutme'}
								)
							}
							href="#aboutme"
							aria-label="About"
						>
											About
						</NavButton>
						<NavButton
							onClick={() =>
								updateDisplayedContent(
									'/',
									{section: 'home'}
								)
							}
							href="#"
							aria-label="Home"
						>
											Home
						</NavButton>
						<NavButton
							onClick={() =>
								updateDisplayedContent(
									'/certifications',
									{section: 'certifications'}
								)
							}
							href="#certifications"
							aria-label="Certifications"
						>
											Certifications
						</NavButton>
						<NavButton
							onClick={() =>
								updateDisplayedContent(
									'/services',
									{section: 'services'}
								)
							}
							href="#services"
							aria-label="Services"
						>
											Services
						</NavButton>
						{/* <NavButton
												onClick={() =>
													updateDisplayedContent(
														'/blog',
														{section: 'blog'}
													)
												}>
											Blog
											</NavButton> */}
					</ButtonContainer>
				</NavigationDiv>
			</header>
			<NewHomeDiv>
				<SideBarDiv>
					<SideBarDivContainer>
						<SideBarProfileDivContainer>
							<ComponentDiv>
								<ProfileDiv>
									<ProfileComponent
										updateDisplayedContent={
											updateDisplayedContent
										}
									/>
								</ProfileDiv>
							</ComponentDiv>
						</SideBarProfileDivContainer>

						<SideBarLinksContainer>
							<ProjectLinksDiv>
								<ComponentDiv>
									<div
										style={{
											fontSize: '18px',
											fontWeight: 'bold',
											margin: '10px'
										}}>
									My Recent Projects
									</div>
									<ProjectLinksListDiv>
										<ProjectsRenderer
											myProjectsArray={myProjectsArray}
										/>
									</ProjectLinksListDiv>
								</ComponentDiv>
							</ProjectLinksDiv>
						</SideBarLinksContainer>

						<SideBarFooterContainer>
							<SideBarFooterDiv>

							</SideBarFooterDiv>
						</SideBarFooterContainer>
					</SideBarDivContainer>
				</SideBarDiv>

				<ContentDiv>
					<ContentWindowWrapper>
						<ComponentDiv>
							<ContentWindowDiv ref={contentRef}>
								<ContentWindow
								/>
								<Routes>
									<Route
										path={'/contactInfo'}
										element={<ContactInfo/>}
										title='Contact Info'
									/>
									<Route
										path={'/myProjects'}
										element={<MyProjects/>}
										title='My Projects'
									/>
									<Route
										path={'/resume'}
										element={<MyResume/>}
										title='My Resume'
									/>
									<Route
										path={'/aboutMe'}
										element={<AboutMe/>}
										title='About Me'
									/>
									<Route
										path={'/certifications'}
										element={<Certifications/>}
										title='Certifications'
									/>
									<Route
										path={'/'} 
										element={<Home/>}
										title='Home'
									/>
									<Route
										path={'/services'} 
										element={<Services/>}
										title='Services'
									/>
									{/* <Route
										path={'/blog'} 
										element={<Blog/>} 
										title='Blog'
										/> */}
								</Routes>
							</ContentWindowDiv>
						</ComponentDiv>
					</ContentWindowWrapper>
				</ContentDiv>
			</NewHomeDiv>
			<footer>
				<div style={{display: 'flex', justifyContent: 'space-evenly'}}>
					<a href="https://github.com/EddieJorden" target="_blank" rel="noopener noreferrer" title="Eddie Moger's Github">Github</a>
					<a href="https://www.linkedin.com/in/edward-moger-1a50b21bb/" target="_blank" rel="noopener noreferrer" title="Eddie Moger's Linkedin">Linkedin</a>
					<a href="https://twitter.com/eddiemoger_com" target="_blank" rel="noopener noreferrer" title="Eddie Moger's Twitter">Twitter</a>
					<a href="https://www.instagram.com/eddiemoger_com/" target="_blank" rel="noopener noreferrer" title="Eddie Moger's Instagram">Instagram</a>
				</div>
				<p style={{margin: '5px', fontSize: '14px'}}>© 2023 Eddie Moger. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default NewHome;
