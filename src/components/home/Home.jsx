import React from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
	max-height: 100%;
	overflow: none;
	object-fit: contain;
`;

const ImageDiv = styled.div`
	max-hegiht: 100%;
	max-width: 100%;
	object-fit: contain;
	overflow: none;

	img {
		object-fit: contain;
		overflow: hidden;
		height: 400px;
		margin: 20px
	}
`;

const Home = () => {
	return (
		<HomeDiv>
			<ImageDiv>
				<div style={{margin: '8px'}}>
					Welcome to EddieMoger.com, your one-stop destination for all your custom software needs. 
				</div>
				<img src="EddieInTheCity.jpg" alt="Eddie in the city" />
				<div style={{margin: '8px'}}>
					I am Eddie Moger, a software developer and entrepreneur with a passion for building innovative solutions. 
					My expertise includes AI integration, CRM, accounting, management, web pages, SEO, startup incubation, 
					and e-commerce. Whether you&apos;re a small business looking to boost your online presence 
					or a startup looking for a partner to bring your idea to life, I&apos;m here to help. 
					Browse my portfolio and let&apos;s work together to turn your vision into a reality.
				</div>
			</ImageDiv>
		</HomeDiv>
	);
};

export default Home;
