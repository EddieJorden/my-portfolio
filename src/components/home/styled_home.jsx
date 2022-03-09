import styled from 'styled-components';

export const HomeDiv = styled.div`
max-height: 100%;
max-width: 100%;
display: flex;
flex-direction: column;
align-items: center;

img {
    max-height: 80vh;
    max-width: 100%;
}

ul {
    padding-inline-start: 0px;
    margin: 0px;
}



.software {
    color: black;
}

.engineer {
    color: black;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.button-container-container {
    max-width: 100px;
}

.contact-div {

    padding: 42px;
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
}

@media (min-width: 814px) {
    display: grid;
    grid-column-layout: .62fr .38fr;
    align-items: center;
    

    .image-div {
        text-align: right;
        max-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contact-div {
        grid-column-start: 2;

    }
}
`