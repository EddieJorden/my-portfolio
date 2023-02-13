/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #1a77f2;
	border-radius: 6px;
	border: 2px solid #1a77f2;
	color: #1a77f2;
	padding: 0.5vw 1.5vw;
	margin: 4px;
	transition: 375ms;
	transform: scale(1);
  transition: transform 0.2s ease-in-out;


	:hover {
		cursor: pointer;
		color: #1a77f2;
		font-weight: bold;
		transition: 375ms;
		transform: scale(1.05);
	}
`;

const NavButton = (props) => {
	let buttonLink = `${props.linkTo}`;
	return (
		<div className="nav-button">
			<Link to={buttonLink}>
				<Button>{props.buttonText}</Button>
			</Link>
		</div>
	);
};

export default NavButton;
