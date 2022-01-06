import styled from 'styled-components';

export const HomeDiv = styled.div`
max-height: 100vh;
min-width: 50%;

img {
    max-height: 100vh;
    max-width: 100%;
    align: right;
}

.home-div {


}

.img-div {

    margin-right: -40px;
    padding-right: 0px;
}

ul {
    margin-left: 0px;
    padding-left: 0px;
}

.button-div {

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
    }
}
`