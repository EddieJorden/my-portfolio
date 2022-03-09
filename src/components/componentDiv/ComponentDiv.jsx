import styled from "styled-components";

const ComponentDiv = styled.div`
    background-color: #fff;
    padding: 40px;
    display: flex;
    flex-direction: columm;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-align: center;
    margin: 30px;
    max-width: 61%;
    max-height: 100%
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);

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