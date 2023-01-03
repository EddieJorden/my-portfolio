import styled from 'styled-components';

const ComponentDiv = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-align: center;
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);

    margin: 15px;

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