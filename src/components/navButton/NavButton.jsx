import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 6px;
    border: 2px solid #33FF29;
    color: #3BEFF5;
    padding: 0.5vw 1.5vw;
    font-size: 2vw;
    margin: -10px;


   :hover {
        cursor: pointer;
        border: 4px solid #3BEFF5;
        margin-left: -1px;
    } 
`

const NavButton = (props) => {
    console.log('props', props)
    let buttonLink = `/my-portfolio${props.linkTo}`
    return (
        <div>
            <Link to={buttonLink}>
                <Button>
                    {props.buttonText}
                </Button>
            </Link>
        </div>
    )
};

export default NavButton;