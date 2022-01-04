import styled from 'styled-components'

export const ContactInfoDiv = styled.div`
h1 {
    text-shadow: 1px 1px white, 1px 1px white, 1px 1px white, 1px 1px white,;
    font-size: 52px;
    line-height: 7px;
}

h2 {
    font-size: 34px;
    font-color: #7873FA;
}

.contactInfo-container {
    display: grid;
    grid-template-columns: .6fr .4fr;
}

@media (max-width: 375px) {

    .contactInfo-container {
        display: grid;
        grid-template-columns: 1fr;
    }

    img {
        max-height: 100vh;
        max-width: 100%;
        align-items: center;
        margin-bottom: 0px;
    }
    
    h1 {
        font-size: 42px;
        color: #5FFAC5
        font-shadow: 3px 
    }

    h3 {
        margin-bottom: 0px;
    }

}

@media (min-width: 376px) and (max-width: 1079px) {

    .contactInfo-container {
        display: grid;
        grid-template-columns: .6fr .4fr;
    }

    img {
        height: 100vh;
    }

    h1 {
        grid-column-start: 2;
        grid-row-start: 0;
    }

}

@media (min-width: 1080px) {
    .contactInfo-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    h1 {
        grid-column-start: 2;
        grid-row-start: 1;
    }

    img {
        min-width: 100;
        max-height: 100vh;
    }

    list {
        text-align: left;
        margin: auto;
    }
}
`