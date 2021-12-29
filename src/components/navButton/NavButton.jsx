import {Link} from 'react-router-dom'

const NavButton = (props) => {
    console.log('props', props)
    return (
        <div>
            <Link to={props.linkTo}>
                <button>
                    {props.buttonText}
                </button>
            </Link>
        </div>
    )
};

export default NavButton;