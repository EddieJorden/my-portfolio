import styled from "styled-components";

export const MyResumeDiv = styled.div`
max-height: 100vh;
max-width: 100%;

iframe {


}

@media (max-width: 777px) {
    grid-column-layout: 1fr;

    iframe {
        min-width: 100%;
        max-height: 61vh;
    }
}

@media (min-width: 778px) {
    display: grid;
    grid-column-layout: .62fr .38fr;

    iframe {
        max-height: 98vh;
        max-width: 98%;
        min-height: 98vh;
        min-width: 98%;

    }

    .my-resume {
        grid-column-start: 2;
        text-align: left;
        margin: auto;
        margin-left: 0px;
    }
}
`