/* eslint-disable react/react-in-jsx-scope */

import ComponentDiv from '../componentDiv/ComponentDiv';
import styled from 'styled-components';

const AboutMeDiv = styled.div`
    margin: 22px;
    max-height: 100%
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    fontSize: 12px;

    img {
        width: 50%;
    }

    h1 {
        color: #1a77f2;
    }

    ul {
        padding: 0px;
        color: black
    }
`;

const AboutMe = () => {
	return (
		<AboutMeDiv>
			<ComponentDiv>
				<div >
					<img src="gt86nurburgring.jpeg" alt="racing gt86 at nurburgring"/>
					<h1>About Me</h1>
					<div>I have always been interested in computers and have been recognized for my engineering mind from a young age.</div>
					<div>When I was just two years old, I learned how to use the software and hidden features on my first computer.</div>
					<div>In first grade, I learned how to use Mac terminal and was responsible for setting up the computers in the classroom for my classmates and teachers.</div>
					<div>At eight years old, I modified the Windows operating system by changing its binary code.</div>
					<div>In high school, I quickly learned Windows admin scripting and other technologies to create automations for software used by my peers.</div>
					<div>I have also created multiple Wordpress and SquareSpace websites and set up various online businesses and services, such as communication and payment automation.</div>
					<div>My passion for software engineering was solidified after completing two courses in Ruby.</div>
					<img src="me_in_hungary.jpeg" alt="Eddie in Hungary"/>
					<div>Seeking a career change, I decided to learn front-end web development and have since worked with many software technologies, including HTML, CSS, JavaScript, Node.js, React.js, Redux, TypeScript, Express, PostgreSQL, Jest, Enzyme, and more.</div>
					<div>I recently conceptualized, planned, developed, released, and currently maintain a fully custom-built CRM where I have used technology to solve complex business problems.</div>
					<div>I have over 50 completed projects on GitHub and experience working with other developers.</div>
					<div>Currently, I am learning back-end web development and am excited to join a new team and work on a new project.</div>
					<div>Hopefully, we can work together in the future.</div>
				</div>
			</ComponentDiv>
		</AboutMeDiv>
	);
};

export default AboutMe;