import styled from 'styled-components';

export const prefix = 'localhost:8888';

export const TextDiv = styled.div`
	padding: 0px 15px;
	margin: 0px 10px;

	@media screen and (max-width: 390px) {
		padding: 0px;
		maring: 0px 5px;
	}
`;

export const CallToActionButton = styled.button`
	background-color: orange;
	border-radius: 6px;
	border: 2px solid orange;
	color: #ffffff;
	font-weight: bold;
	padding: 0.5vw 1.5vw;
	margin: 4px;
	font-size: 18px;
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

export const AboutMeDiv = styled.div`
    margin: 22px;
    max-height: 100%
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    fontSize: 12px;

    img {
        width: 30%;
    }

		@media screen and (max-width: 390px) {
			img {
				width: 82%;
			}

    h1 {
        color: #1a77f2;
				margin: 0px 5px;
    }

    ul {
        padding: 0px;
        color: black
    }
`;

export const ImageDescription = styled.div`
		font-size: 10px;
`;

export const ImageDiv = styled.div`
	max-hegiht: 100%;
	max-width: 100%;
	object-fit: contain;
	overflow: none;
	margin: 10px;

	img {
		object-fit: contain;
		overflow: hidden;
		max-height: 333px
	}

	@media screen and (max-width: 390px) {
		img {
			margin: 0px;
		}
	}
`;

export const StyledButton = styled.button`
	font-size: 8px;
	background-color: #89D943;
	border-radius: 6px;
	border: 2px solid #89D943;
	color: white;
	padding: 0.2vw 0.2vw;
	margin: 4px;
	transition: 375ms;
	font-weight: bold;
	transform: scale(1);
  transition: transform 0.2s ease-in-out;

	:hover {
		cursor: pointer;
		color: white;
		font-weight: bold;
		transition: 375ms;
		transform: scale(1.1);
	}
`;

