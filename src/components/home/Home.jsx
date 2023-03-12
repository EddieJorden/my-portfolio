import React from 'react';
import styled from 'styled-components';
import { ImageDescription, ImageDiv, ShadowedImg } from '../../utils';

const HomeDiv = styled.div`
	max-height: 100%;
	overflow: none;
	object-fit: contain;

	@media screen and (max-width: 390px) {
		margin: 0px;

		ShadowedImg {
			height: 10%;
		}

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
			<TextDiv>
				<h1 style={{marginBottom: '5px'}}>Welcome to EddieMoger.com</h1>
			</TextDiv>
			<TextDiv>
				<h2 style={{marginTop: '0px'}}>
					Just making the world a better place
				</h2>
			</TextDiv>
			<ImageDiv>
				<ShadowedImg
					src="EddieInTheCity.jpg"
					alt="Eddie Moger in San Francisco CA enjoying some street art"
					title="Eddie Moger in San Francisco CA enjoying some street art"
					description="Eddie Moger in San Francisco CA enjoying some street art"
				/>
				<ImageDescription style={{fontSize: '10px'}}>Eddie Moger in San Francisco CA enjoying some street art</ImageDescription>
			</ImageDiv>
		</HomeDiv>
	);
};

export default Home;
