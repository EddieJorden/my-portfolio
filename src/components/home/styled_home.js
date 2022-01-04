import styled from 'styled-components'

export const HomeDiv = styled.div`
    h1 {
        text-shadow: 1px 1px white, 1px 1px white, 1px 1px white, 1px 1px white,;
        font-size: 52px;
        line-height: 7px;
    }

    .eddie {
        margin-top: 84px;
        margin-bottom: 42px;
    }

    .software, .engineer {
        color: #7873FA;
        line-height: 1px;
        font-size: 18px;
    }

    .engineer {
        margin-bottom: 42px;
    }

    .container {
        display: grid;
        grid-template-columns: .6fr .4fr;
    }

    @media (max-width: 375px) {

        .container {
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

        .eddie {
            margin-top: 42px;
            margin-bottom: 42px;
        }

        .moger {
            margin-bottom: 50px
        }

        .engineer {
            margin-bottom: 42px;
        }

        .info {
            margin: 0px;
            padding: 0px;
        }
    }

    @media (min-width: 376px) and (max-width: 1079px) {

        .container {
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

        .eddie {
            margin-bottom: 42px;
        }

        .moger {
            margin-bottom: 120px;
        }

        .engineer {
            margin-bottom: 300px;
        }
    }

    @media (min-width: 1080px) {
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        h1 {
            grid-column-start: 2;
            grid-row-start: 1;
        }

        img {
            min-width: 100%;
            max-height: 100vh;
        }

        list {
            justify-content: left;
            text-align: left;
        }

        .moger {
            margin-bottom: 80px;
        }

        .engineer {
            margin-bottom: 220px;
        }
    }
`