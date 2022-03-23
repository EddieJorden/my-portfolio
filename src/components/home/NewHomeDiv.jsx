import styled from  'styled-components'

const NewHomeDiv = styled.div`
    height: 100vh;
    max-width: 100vw;
    display: flex;

    .content-div {
        margin-top: 30px;
        margin-right: 30px;
        color: white;
        width: 61.8vw;
        max-height: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .content-window {
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


`

export default NewHomeDiv;