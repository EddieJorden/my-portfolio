import styled from 'styled-components'

export const ContactInfoDiv = styled.div`
max-height: 100vh;
max-width: 100%;

img {
    max-height: 100vh;
    max-width: 100%;
    
}

ul {
    padding-inline-start: 0px;
    margin: 0px;
}

.contact-info {
    margin-bottom: 46px;
}

.contact-info, .eddie-moger {
    margin: 0px;
    margin-left: 10px;
    margin-top: 42px;
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
    }

    img {
        max-height: 41vh;
    }

    .contact-info {
        margin-bottom: 0px;
    }
}

@media (min-width: 814px) {
    display: grid;
    grid-column-layout: .62fr .38fr;

    .image-div {
        text-align: right;
    }

    .contact-div {
        grid-column-start: 2;
        margin: auto;
    }

    .contact-info {
        grid-column-start: 2;
        text-align: left;
        margin: auto;
    }

    .button-container: {
        text-align: center
    }
}
`

