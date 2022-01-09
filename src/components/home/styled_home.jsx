import styled from 'styled-components';

export const HomeDiv = styled.div`
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

.button-container {
    padding: 4px;
}

@media (max-width: 805px) {
    grid-column-layout: 1fr;

    .image-div {
        min-width: 100%;
    }

    img {
        max-height: 62vh;
    }

    .eddie {
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

    .button-container: {

    }
}
`

// max-height: 100vh;
// min-width: 50vw;

// img {
//     max-height: 100vh;
//     max-width: 100%;
// }

// ul {
//     padding-inline-start: 0px;
//     margin: 0px;
// }

// .eddie {
//     margin-bottom: 9px;
// }

// .eddie, .moger, .software, .engineer {
//     margin: 0px;
    
// }

// .title {
//     margin-top: 33px;
//     margin-bottom: 12px;
// }

// .button-container {
//     padding: 4px;
//     margin: 20px;
//     background-color: red;
// }

// @media (max-width: 805px) {
//     grid-column-layout: 1fr;

//     .image-div {
//         min-width: 100%
//     }

//     img {
//         max-height: 62vh;
//     }
// }

// @media (min-width: 814px) {
//     display: grid;
//     grid-column-layout: .62fr .38fr;

//     image-div {
//         text-align: right;
//     }
    
//     .home-div {
//         grid-column-start: 2;
//         margin: auto;
//         display: flex;
//         width: 100%;
//     }

//     .home-title {
//         width: 100%;
//         margin: auto;
//         align-items: left;

//     }

//     .button-container {
//         text-align: center;
//         margin: auto;
//     }
// }