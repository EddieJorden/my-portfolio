import styled from 'styled-components';

export const HomeDiv = styled.div`
max-height: 100vh;
min-width: 50%;


img {
    max-height: 100vh;
    max-width: 100%;
}

.button-div {
margin-left: 0px;
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
        text-align: left;
        margin: auto;
        margin-left: 0px;
        background-color: red;
    }
}
`