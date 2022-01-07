import styled from 'styled-components'

export const ContactInfoDiv = styled.div`
max-height: 100vh;
max-width: 100%;

img {
    max-height: 100vh;
    max-width: 100%;
}

.button-container {
    margin-left: 100px
}

@media (max-width: 777px) {
    grid-column-layout: 1fr;

    img {
        max-height: 38vh;
    }
}

@media (min-width: 778px) {
    display: grid;
    grid-column-layout: .62fr .38fr;

    .contact-info {
        grid-column-start: 2;
        text-align: left;
        margin: auto;
        margin-left: 0px;
    }
}
`

