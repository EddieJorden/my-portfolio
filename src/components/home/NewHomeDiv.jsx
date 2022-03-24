import styled from  'styled-components'

const NewHomeDiv = styled.div`
    height: 100vh;
    max-width: 100vw;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
    }

`

export default NewHomeDiv;