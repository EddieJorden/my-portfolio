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
		width: 500px;
	}
`;

const Home = () => {
	return (
		<HomeDiv>
			<ImageDiv>
				<img src="EddieInTheCity.jpg" alt="Eddie in the city" />
			</ImageDiv>
		</HomeDiv>
	);
};

export default Home;
