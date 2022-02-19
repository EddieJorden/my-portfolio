import styled from 'styled-components'

export const ContactInfoDiv = styled.div`
max-height: 100vh;
max-width: 100%;

img {
    max-height: 80%;
    max-width: 100%;
    margin: 5%;
}

.imag-div {
    max-height: 100vh;
}

ul {
    padding-inline-start: 0px;
    margin: 0px;
}

.contact-div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-info, .eddie-moger {
    margin: 0px;
    margin-left: 10px;
}

.eddie-moger {

}

.email {
    margin-top: 0px;
}

h3 {
    margin: 12px;
}

.button-container {
    padding: 4px;
}

@media (max-width: 805px) {
    grid-column-layout: 1fr;

    .image-div {
        min-width: 100%;
        min-height: 100%;
    }

    img {
        max-height: 41vh;
        margin: 30px;

    }

    .contact-info {
        margin-bottom: 0px;
    }
    
    .contact-div {
        margin: 0px;
    }
}

@media (min-width: 814px) {
    display: grid;
    grid-column-layout: .62fr .38fr;

    .image-div {
        text-align: right;
        text-align: right;
        max-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contact-div {
        grid-column-start: 2;
        
    }

    .contact-info {
        grid-column-start: 2;


    }

    .button-container: {
        text-align: center
    }
}
`

