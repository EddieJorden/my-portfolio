import React from 'react';
import styled from 'styled-components';
import { ImageDescription, ImageDiv, ShadowedImg } from '../../utils';

const HomeDiv = styled.div`
	max-height: 100%;
	overflow: none;
	object-fit: contain;

	@media screen and (max-width: 390px) {
		margin: 0px;

		h3 {
			margin: 5px 0px;
		}
	}
`;

const TextDiv = styled.div`
	margin: 18px;

	@media screen and (max-width: 390px) {
		margin: 5px;
	}
`;

const Home = () => {
	return (
		<HomeDiv>
			<h3 style={{color: '#1a77f2'}}>Welcome to EddieMoger.com</h3>
			<TextDiv >
					Your one-stop destination for all your custom software needs. 
			</TextDiv>
			<ImageDiv>
				<ShadowedImg
					src="EddieInTheCity.jpg"
					alt="Eddie Moger in San Francisco CA, enjoying the beautiful art"
					
				/>
				<ImageDescription style={{fontSize: '10px'}}>Eddie in San Francisco CA enjoying some street art</ImageDescription>
			</ImageDiv>
			<TextDiv>
					I am Eddie Moger, a software developer and entrepreneur with a passion for building innovative solutions. 
					My expertise includes custom software, web development, SEO, AI and much more. Whether you&apos;re a small business looking to boost your online presence 
					or a startup looking for a partner to bring your idea to life, I&apos;m here to help. 
					Browse my portfolio and let&apos;s work together to turn your vision into a reality.
			</TextDiv>
		</HomeDiv>
	);
};

export default Home;
