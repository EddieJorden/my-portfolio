import styled from  'styled-components';

const NewHomeDiv = styled.div`
    height: 100vh;
		min-height: 100vh;
		max-height: 100vh;
    max-width: 100vw;
    display: flex;
    align-items: center;
		background-image: url(EddieMoger.com-background-image-detail-upscalse.png);
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;

    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
    }

`;

export default NewHomeDiv;