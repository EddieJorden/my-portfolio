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

const TextDiv = styled.div`
	padding: 0px 15px;
	margin: 0px 10px;
`;

const AboutMe = () => {
	return (
		<AboutMeDiv>
			<ComponentDiv>
				<div style={{padding: '5px'}}>
					<h1>Welcome to my corner of the internet!</h1>
					<img src='New-startup-office.jpeg' alt='New startup New office' style={{margin: '15px'}}/>
					<TextDiv>My name is Eddie Moger and I am a software developer and entrepreneur with a passion for building innovative solutions.</TextDiv>
					<img src='Monday-Meeting-Biirdee.com-office-burlingame-ca.jpeg' alt='Monday meeting at startup' style={{margin: '15px'}}/>
					<TextDiv>Let&apos;s start with the boring stuff first - I have an extensive background in automotive racing, specializing in chassis tuning, and a background in PC building, including hardware assembly, overclocking, and using aftermarket software. But that&apos;s just the tip of the iceberg. My true passion lies in software development, where I have been known to build fully custom CRMs, unlock hardware to use aftermarket software, building solutions for small businesses including websites, internal communications, SEO, e-commerce, custom back-end software, integrating AI and machine learning, financial simulations, data visualization, encryption and much more.</TextDiv>
					<img src="New-York-Xeni-app-office-.jpeg" alt="Eddie at Xeni App office in New York City" style={{margin: '15px'}}/>
					<TextDiv>I have a passion for dynamic programming and problem-solving. I spent 8 years in corporate management before starting my own business, which I ran with great success for 15 years before deciding to switch to something I am more passionate about - software development.</TextDiv>
					<TextDiv>Now, let&apos;s talk about the fun stuff. I have competed in auto racing, motorcycle racing, rock climbing, downhill mountain bike racing, Muay Thai Kickboxing and much more. I believe that my passion for these activites translates into my work ethic - I am always pushing myself to be the best and constantly seeking new challenges.</TextDiv>
					<img src="gt86nurburgring.jpeg" alt="racing gt86 at nurburgring" style={{margin: '15px'}}/>
					<TextDiv>So, why should you choose me for your next project? Well, I am a nerd at heart and love solving problems. My skills are not just tools, they are the tools I use for success. I am excited to work on new projects and help build your dreams. So, whether you&apos;re looking for a new website, custom software, or just someone to bounce ideas off of, I am here for you. Let&apos;s make something great together!</TextDiv>
					<TextDiv>Oh, and one last thing, I promise to keep the nerdy jokes to a minimum, but I can&apos;t guarantee I won&apos;t throw in a Star Wars reference or two.</TextDiv>
				</div>
			</ComponentDiv>
		</AboutMeDiv>
	);
};

export default AboutMe;