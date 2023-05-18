/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import ContentWindow from './ContentWindow';
import ProfileComponent from '../profileComponent/ProfileComponent';
import ProjectsRenderer from './ProjectsRenderer';
import ComponentDiv from '../componentDiv/ComponentDiv';
import { useNavigate } from 'react-router-dom';
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

import RouteRenderer from './RouteRenderer';

const MainLayout = ({ myProjectsArray }) => {
	const navigate = useNavigate();
	const contentRef = useRef(null);
	const title = 'EddieMoger.com';

	const updateDisplayedContent = (path, state) => {
		navigate(path, { state: state });
		contentRef.current.scrollTop = 0;
	};

	return (
		<div>
			<header>
				<TitleDiv><img src='detailed-upscaled-logo.png' alt='EddieMoger.com high resolution logo'/><span><h1 style={{color: 'white', margin: '0px'}}>{title}</h1></span></TitleDiv>
				<HamburgerMenuDiv>
					<HamburgerMenu updateDisplayedContent={updateDisplayedContent}/>
				</HamburgerMenuDiv>
				<NavigationDiv>
					<ButtonContainer>
						<NavButtonRenderer updateDisplayedContent={updateDisplayedContent}/>
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
								<div>
									<RouteRenderer/>
								</div>
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
