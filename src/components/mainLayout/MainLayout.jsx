/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import ContentWindow from './ContentWindow';
import MyResume from '../myResume/MyResume';
import ContactInfo from '../contactInfo/ContactInfo';
import MyProjects from '../myProjects/MyProjects';
import Home from '../home/Home';
import AboutMe from '../aboutMe/AboutMe';
import Services from '../services/Services';
import ProfileComponent from '../profileComponent/ProfileComponent';
import ProjectsRenderer from './ProjectsRenderer';
import ComponentDiv from '../componentDiv/ComponentDiv';
import Certifications from '../certifications/Certifications';
// import Blog from '../blog/Blog';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { useRef } from 'react';
import { 
	MainLayoutDiv, 
	SideBarProfileDivContainer, 
	ProjectLinksDiv, 
	SideBarFooterDiv, 
	SideBarFooterContainer, 
	ProfileDiv, 
	NavigationDiv, 
	HamburgerMenuDiv, 
	SideBarLinksContainer,
	TitleDiv,
	ButtonContainer,
	SideBarDiv,
	SideBarDivContainer,
	ProjectLinksListDiv,
	ContentDiv,
	ContentWindowWrapper,
	ContentWindowDiv
} from './styledMainLayoutComponents';
import NavButtonRenderer from './NavButtonRenderer';

const MainLayout = ({ myProjectsArray }) => {
	const navigate = useNavigate();
	const contentRef = useRef(null);
	const title = 'EddieMoger.com';

	const updateDisplayedContent = (path, state) => {
		navigate(path, { state: state });
		contentRef.current.scrollTop = 0;
	};

	const navItems = [
		{
			path: '/contact',
			section: 'Contact'
		},
		{
			path: '/myProjects',
			section: 'Projects'
		},
		{
			path: '/resume',
			section: 'Resume'
		},
		{
			path: '/aboutMe',
			section: 'About'
		},
		{
			path: '/',
			section: 'Home'
		},
		{
			path: '/certifications',
			section: 'Certifications'
		},
		{
			path: '/services',
			section: 'Services'
		},
		// {
		// 	path: '/blog',
		// 	section: 'Blog'
		// }
	];

	return (
		<div>
			<header>
				<TitleDiv><img src='detailed-upscaled-logo.png' alt='EddieMoger.com high resolution logo'/><span><h1 style={{color: 'white', margin: '0px'}}>{title}</h1></span></TitleDiv>
				<HamburgerMenuDiv>
					<HamburgerMenu updateDisplayedContent={updateDisplayedContent}/>
				</HamburgerMenuDiv>
				<NavigationDiv>
					<ButtonContainer>
						<NavButtonRenderer navItems={navItems} updateDisplayedContent={updateDisplayedContent}/>
					</ButtonContainer>
				</NavigationDiv>
			</header>
			<MainLayoutDiv>
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
										path={'/contact'}
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
			</MainLayoutDiv>
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

export default MainLayout;
