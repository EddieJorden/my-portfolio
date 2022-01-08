import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 6px;
    border: 2px solid #33FF29;
    color: #3BEFF5;
    padding: 0.5vw 1.5vw;
    margin: 4px;
    transition: 375ms;
    :hover {
        cursor: pointer;
        border: 4px solid #3BEFF5;
        color: #3BEFF5;
        font-weight: bold;
        margin: 2px;
        transition: 375ms
    } 
`

const NavButton = (props) => {
    console.log('props', props)
    let buttonLink = `/my-portfolio${props.linkTo}`
    return (
        <div class="nav-button">
            <Link to={buttonLink}>
                <Button>
                    {props.buttonText}
                </Button>
            </Link>
        </div>
    )
};

export default NavButton;