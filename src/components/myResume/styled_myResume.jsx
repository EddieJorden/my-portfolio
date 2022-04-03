import styled from 'styled-components';

export const MyResumeDiv = styled.div`
max-height: 100%;
max-width: 100%;

.button-container {
    min-height: 50px
}

.contact-info-button, .home-button {
    min-height: 50px;
    padding: 10px;
}

@media (max-width: 805px) {
    grid-column-layout: 1fr;
}

@media (min-width: 550px) {
    display: grid;
    grid-column-layout: .62fr .38fr;

    iframe-div {
        text-align: right;
    }

    iframe {
        max-height: 98%;
        max-width: 98%;
        min-height: 98vh;
        min-width: 98%;
    }

    .my-resume {
        grid-column-start: 2;

        margin: auto;
    }
}
`;
