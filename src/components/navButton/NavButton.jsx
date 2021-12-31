import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #FF8C00;
    color: #FF8C00;
    padding: 0.25em 1em;
    margin: 5px;
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