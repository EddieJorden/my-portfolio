import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 6px;
    border: 2px solid #33FF29;
    color: #3BEFF5;
    padding: 0.25em 1em;
    margin: 5px;
    font-size: 27px;
`

const NavButton = (props) => {
    console.log('props', props)
    return (
        <div>
            <Link to={props.linkTo}>
                <Button>
                    {props.buttonText}
                </Button>
            </Link>
        </div>
    )
};

export default NavButton;