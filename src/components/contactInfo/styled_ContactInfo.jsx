import styled from 'styled-components'

export const ContactInfoDiv = styled.div`
min-height: 100%;
max-height: 100%;
max-width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
text-wrap: none;

img {
    max-height: 80%;
    max-width: 80%;
}

.imag-div {
    max-height: 100%;
    max-width: 80vw;
}

ul {
    padding-inline-start: 0px;
    margin: 0px;
}

.contact-info-div {
    margin: 30px;
    font-weight: 900;
}

.contact-div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-info, .eddie-moger {
    margin: 10px;
    margin-left: 10px;
}

.eddie-moger {
    margin: 10px;
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

.email {
    color: grey
}

.phone {
    color: grey
}

.github {
    color: grey
}

.linkedin {
    color: grey
}

.resume {
    color: grey
}

@media (max-width: 805px) {
    grid-column-layout: 1fr;

    .image-div {
        min-width: 100%;
        min-height: 100%;
        max-width: 100vw;
    }

    img {
        max-height: 41vh;
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
        max-height: 100%;
        max-width: 100%;
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

