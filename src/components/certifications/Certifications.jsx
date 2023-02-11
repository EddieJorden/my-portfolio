/* eslint-disable react/react-in-jsx-scope */

import {ImageDiv, TextDiv, AboutMeDiv, ImageDescription} from '../../utils';

const Certifications = () => {
	return (
		<AboutMeDiv>
			<ImageDiv>
				<img src={'Eddie-Moger-Front-End-Web-Development-Certificate.png'}/>
				<ImageDescription>Front End Web Development certificate of completion with Codecademy.com</ImageDescription>
			</ImageDiv>
			<TextDiv>I am a web development professional with a passion for software development. I have completed numerous courses and have obtained numerous certifications from codecademy.com in various technologies and disciplines such as Typescript, Node.js, CSS in JS, Color Design, Git and Github, Website Development, intermediate JavaScript, Front-End Engineering, React, CSS, Javascript, and HTML. These certifications showcase my commitment and dedication to the field of web development. My enthusiasm for the subject is evident in the fact that I am continuously seeking to expand my knowledge, and I am currently exploring the back-end aspect of web development and working with Postgres. I am confident in my ability to bring my passion, excitement, and expertise to any project.</TextDiv>
			<h3 >Certifications inlcude</h3>
			<div style={{display: 'flex', flexWrap: 'wrap'}}>
				<ul>Learn HTML</ul>
				<ul>Learn CSS</ul>
				<ul>Learn JavaScript</ul>
				<ul>Learn TypeScript</ul>
				<ul>Learn Node.js</ul>
				<ul>Learn CSS-in-JS</ul>
				<ul>Learn Redux</ul>
				<ul>Learn React</ul>
				<ul>Learn Intermediate JavaScript</ul>
				<ul>Learn JavaScript: Error Handling</ul>
				<ul>Learn JavaScript: Asynchronous Programming</ul>
				<ul>Learn JavaScript Unit Testing</ul>
				<ul>Front-End Engineer</ul>
				<ul>Create a Front-End App with React</ul>
				<ul>Create an Advanced Web App with React and Redux
				</ul>
				<ul>Build a Website with HTML, CSS, and GitHub Pages
				</ul>
				
				<ul>Learn Navigation Design</ul>
				<ul>Learn Color Design</ul>
				<ul>Learn CSS: Responsive Design</ul>
				<ul>Learn Git & GitHub</ul>
			</div>
			<a href={'https://www.codecademy.com/profiles/eddieJorden.tech'}>Codecademy Certifications</a>
		</AboutMeDiv>
	);
};

export default Certifications;
