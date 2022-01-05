import styled from "styled-components";

export const MyResumeDiv = styled.div`
max-height: 100vh;
max-width: 100%;

iframe {

    max-height: 100vh;
    max-width: 100%;
}

@media (max-width: 777px) {
    grid-column-layout: 1fr;

    iframe {
        src: "Eddie Moger Resume.pdf#zoom=40"
        max-height: 61vh;
    }
}

@media (min-width: 778px) {
    display: grid;
    grid-column-layout: .62fr .38fr;

    iframe {
        min-height: 100vh;
        min-width: 95%
    }

    .my-resume {
        grid-column-start: 2;
        text-align: left;
        margin: auto;
        margin-left: 0px;
    }
}
`