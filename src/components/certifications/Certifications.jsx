/* eslint-disable react/react-in-jsx-scope */

import {ImageDiv, TextDiv, AboutMeDiv, ImageDescription} from '../../utils';
import styled from 'styled-components';

const CertificationDiv = styled.div`
	background-color: #f1f1f1;
	border: 1px solid #d3d3d3;
	border-radius: 5px;
	padding: 10px;
	margin: 10px;
	text-align: center;
`;

const Certifications = () => {
	return (
		<AboutMeDiv>
			<ImageDiv>
				<a href={'https://www.codecademy.com/profiles/eddieJorden.tech'} target="_blank" rel="noopener noreferrer" title="My profile on Codecademy.com" aria-label="Codecademy profile and certificates" ><img src={'Eddie-Moger-Front-End-Web-Development-Certificate.png'}/></a>
				<ImageDescription>Front End Web Development certificate of completion with Codecademy.com</ImageDescription>
			</ImageDiv>
			<TextDiv>I am a web development professional with a passion for software development. I have completed numerous courses and have obtained numerous certifications from Codecademy.com in various technologies and disciplines such as React, Redux, Typescript and much more. These certifications showcase my commitment and dedication to the field of web development. My enthusiasm for the subject is evident in the fact that I am continuously seeking to expand my knowledge, and I am currently exploring the back-end aspect of web development and machine learning. I am confident in my ability to bring my passion, excitement, and expertise to any project.</TextDiv>
			<h3 >Certifications inlcude</h3>
			<div style={{display: 'flex', flexWrap: 'wrap'}}>
				<CertificationDiv>Learn HTML</CertificationDiv>
				<CertificationDiv>Learn CSS</CertificationDiv>
				<CertificationDiv>Learn JavaScript</CertificationDiv>
				<CertificationDiv>Learn TypeScript</CertificationDiv>
				<CertificationDiv>Learn Node.js</CertificationDiv>
				<CertificationDiv>Learn CSS-in-JS</CertificationDiv>
				<CertificationDiv>Learn Redux</CertificationDiv>
				<CertificationDiv>Learn React</CertificationDiv>
				<CertificationDiv>Learn Intermediate JavaScript</CertificationDiv>
				<CertificationDiv>Learn JavaScript: Error Handling</CertificationDiv>
				<CertificationDiv>Learn JavaScript: Asynchronous Programming</CertificationDiv>
				<CertificationDiv>Learn JavaScript Unit Testing</CertificationDiv>
				<CertificationDiv>Front-End Engineer</CertificationDiv>
				<CertificationDiv>Create a Front-End App with React</CertificationDiv>
				<CertificationDiv>Create an Advanced Web App with React and Redux
				</CertificationDiv>
				<CertificationDiv>Build a Website with HTML, CSS, and GitHub Pages
				</CertificationDiv>
				<CertificationDiv>Learn Navigation Design</CertificationDiv>
				<CertificationDiv>Learn Color Design</CertificationDiv>
				<CertificationDiv>Learn CSS: Responsive Design</CertificationDiv>
				<CertificationDiv>Learn Git & GitHub</CertificationDiv>
			</div>
			<a href={'https://www.codecademy.com/profiles/eddieJorden.tech'} target="_blank" rel="noopener noreferrer" title="My profile on Codecademy.com" aria-label="Codecademy profile and certificates">Codecademy Certifications</a>
		</AboutMeDiv>
	);
};

export default Certifications;
