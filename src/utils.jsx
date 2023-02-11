import styled from 'styled-components';

export const TextDiv = styled.div`
	padding: 0px 15px;
	margin: 0px 10px;

	@media screen and (max-width: 390px) {
		padding: 0px;
		maring: 0px 5px;
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
				margin: 10px;
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

	}
	@media screen and (max-width: 390px) {
		img {
			margin: 0px;
		}
	}
`;
