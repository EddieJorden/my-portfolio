import styled from  'styled-components';

const NewHomeDiv = styled.div`
		max-height: 100vh;
    max-width: 100vw;
    display: flex;
		justify-content: space-between;
    align-items: center;
		background-image: url(EddieMoger.com-background.png);
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;

    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
    }

`;

export default NewHomeDiv;