import styled from 'styled-components';

const ComponentDiv = styled.div`
    background-color: rgba(255, 255, 255, 0.95);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-align: center;
    max-width: 100%;
    min-width: 95%;
    max-height: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
    margin: 10px;

		@media only screen and(max-width: 390px) {
			margin: 0px;
		}

    .project-notes {
        color: black;
        font-weight: bold;
    }

    .github-link {
        color: grey;
        a {
            color: grey;
        }
    }
`;

export default ComponentDiv;