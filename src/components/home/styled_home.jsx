import styled from 'styled-components';

export const HomeDiv = styled.div`
max-height: 100vh;
min-width: 50vw;

img {
    max-height: 100vh;
    max-width: 100%;
}

ul {
    padding-inline-start: 0px;
    margin: 0px;
}

.eddie {
    margin-bottom: 9px;
}

.eddie, .moger, .software, .engineer {
    margin: 0px;
}

.title {
    margin-top: 33px;
}

.button-container {
    padding: 23px;
}

@media (max-width: 777px) {
    grid-column-layout: 1fr;

    img {
        max-height: 61vh;
    }
}

@media (min-width: 778px) {
    display: grid;
    grid-column-layout: .62fr .38fr;

    .home-div {
        grid-column-start: 2;
        margin: auto;
        margin-left: 0px;
    }
}
`