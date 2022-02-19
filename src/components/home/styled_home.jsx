import styled from 'styled-components';

export const HomeDiv = styled.div`
max-height: 100vh;
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;

img {
    max-height: 80vh;
    max-width: 100%;
    border-radius: 5px;
}

ul {
    padding-inline-start: 0px;
    margin: 0px;
}

.eddie {

}

.eddie-moger {

}

.email {
    margin-top: 0px;
}

h3 {
    margin: 12px;
}

.image-div {

}

.button-container {
    padding: 4px;
}

.contact-div {
    background-color: #fff;
    max-width: 61%;
    padding: 5%;
    border-radius: 5px;
}

@media (max-width: 805px) {
    grid-column-layout: 1fr;

    .image-div {
        max-width: 61%;
        margin: 10%;
    }

    img {
        max-height: 100%;
    }

    .eddie {
        margin-bottom: 0px;
    }
}

@media (min-width: 814px) {
    display: grid;
    grid-column-layout: .62fr .38fr;
    align-items: center;
    

    .image-div {
        text-align: right;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contact-div {
        grid-column-start: 2;
        max-width: 100px;
    }

    .button-container: {

    }
}
`