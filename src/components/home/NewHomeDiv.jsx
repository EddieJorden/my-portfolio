import styled from  'styled-components'

const NewHomeDiv = styled.div`
    background-color: red;
    height: 100vh;
    width: 100vw;
    display: flex;
    color: white;

    .nav-div {
        background-color: green;
        color: white;
        width: 38.2vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .content-div {
        background-color: blue;
        color: white;
        width: 61.8vw;
        max-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .content-container {
        max-width: 80vw;
        max-height: 80vh;
        background-color: white;
        color: black;
        overflow: scroll;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        text-align: -webkit-center;
    }

    @media only screen and (max-width: 900px) {
        flex-direction: column;

        .nav-div {
            background-color: green;
            height: 20vh;
            width: 100vw;
            color: white;
        }

        .content-div {
            height: 80vh;
            width: 100vw;
        }
    }
`

export default NewHomeDiv;