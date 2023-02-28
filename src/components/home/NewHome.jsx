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
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NewHomeButton = styled.button`
	font-size: 10px;
	background-color: #1a77f2;
	border-radius: 6px;
	border: 2px solid #1a77f2;
	color: #ffffff;
	font-weight: bold;
	padding: 0.5vw 1.5vw;
	margin: 4px;
	transition: 375ms;
	transform: scale(1);
	transition: transform 0.2s ease-in-out;

	:hover {
		cursor: pointer;
		color: #ffffff;
		font-weight: bold;
		transition: 375ms;
		transform: scale(1.05);
	}
`;

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

const NavigationDiv = styled.div`
	min-width: 100%;
`;

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
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	text-align: -webkit-center;
	max-width: 100%;
	height: 75vh;

	@media only screen and (max-width: 900px) {
		height: 66vh
		};
`;

const ContentWindowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	min-width: 85%;

	@media only screen and (max-width: 900px) {

	}
`;

const ButtonContainer = styled.div`
	padding: 10px
`;

const TitleDiv = styled.div`
color: #1a77f2;
font-weight: bold;
font-size: 34px;
margin: 10px;
padding: 8px;
border-radius: 5px;
background-color: rgba(255, 255, 255, 0.95);
display: flex;
justify-content: center;
align-items: center;

img {
	margin: 5px;
	width: 66px;
}
`;

const NewHome = ({ myProjectsArray }) => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/home');
	}, []);

	const updateDisplayedContent = (path) => {
		navigate(path);
	};

	const title = 'EddieMoger.com';

	return (
		<div>
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
								<NavigationDiv>
									<ComponentDiv>
										<ButtonContainer>
											<NewHomeButton
												onClick={() =>
													updateDisplayedContent(
														'/contactInfo',
													)
												}>
											Contact
											</NewHomeButton>
											<NewHomeButton
												onClick={() =>
													updateDisplayedContent(
														'/myProjects',
													)
												}>
											Projects
											</NewHomeButton>
											<NewHomeButton
												onClick={() =>
													updateDisplayedContent(
														'/resume',
													)
												}>
											Resume
											</NewHomeButton>
											<NewHomeButton
												onClick={() =>
													updateDisplayedContent(
														'/aboutme',
													)
												}>
											About
											</NewHomeButton>
											<NewHomeButton
												onClick={() =>
													updateDisplayedContent(
														'/Home',
													)
												}>
											Home
											</NewHomeButton>
											<NewHomeButton
												onClick={() =>
													updateDisplayedContent(
														'/certifications',
													)
												}>
											Certifications
											</NewHomeButton>
											<NewHomeButton
												onClick={() =>
													updateDisplayedContent(
														'/services',
													)
												}>
											Services
											</NewHomeButton>
										</ButtonContainer>
									</ComponentDiv>
								</NavigationDiv>
							</SideBarFooterDiv>
						</SideBarFooterContainer>
					</SideBarDivContainer>
				</SideBarDiv>

				<ContentDiv>
					<TitleDiv><img src='detailed-upscaled-logo.png' alt='EddieMoger.com high resolution logo'/><span>{title}</span></TitleDiv>
					<ContentWindowWrapper>
						<ComponentDiv>
							<ContentWindowDiv>
								<ContentWindow
								/>
								<Routes>
									<Route
										path={'/contactInfo'}
										element={<ContactInfo/>} />
									<Route
										path={'/myProjects'}
										element={<MyProjects/>} />
									<Route
										path={'/resume'}
										element={<MyResume/>} />
									<Route
										path={'/aboutMe'}
										element={<AboutMe/>} />
									<Route
										path={'/certifications'}
										element={<Certifications/>} />
									<Route
										path={'/home'} 
										element={<Home/>} />
									<Route
										path={'/services'} 
										element={<Services/>} />
								</Routes>
							</ContentWindowDiv>
						</ComponentDiv>
					</ContentWindowWrapper>
				</ContentDiv>
			</NewHomeDiv>
			<footer>
			© 2019 Eddie Moger. All rights reserved.

			</footer>
		</div>
	);
};

export default NewHome;
