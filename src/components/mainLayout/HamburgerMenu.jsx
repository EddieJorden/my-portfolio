/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const MenuIcon = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
	background-color: #333;
	color: white;
	border-radius: 5px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const NavLink = styled.a`
  display: block;
  padding: 10px;
  font-size: 16px;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: #eee;
  }
`;


const HamburgerMenu = ({updateDisplayedContent}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Wrapper>
			<MenuIcon onClick={toggleMenu}>
				<img src="hamburger-menu-icon.png" alt="Menu Icon" />
			</MenuIcon>
			<Menu isOpen={isOpen}>
				<NavLink
					href="#/contact"
					onClick={() => {
						updateDisplayedContent('/contact', { section: 'contactInfo' });
						toggleMenu();
					}}
					aria-label="Contact"
				>
          Contact
				</NavLink>
				<NavLink
					href="#/myProjects"
					onClick={() => {
						updateDisplayedContent('/myProjects', { section: 'myProjects' });
						toggleMenu();
					}}
					aria-label="Projects"
				>
          Projects
				</NavLink>
				<NavLink
					href="#/resume"
					onClick={() => {
						updateDisplayedContent('/resume', { section: 'resume' });
						toggleMenu();
					}}
					aria-label="Resume"
				>
          Resume
				</NavLink>
				<NavLink
					href="#/aboutme"
					onClick={() => {
						updateDisplayedContent('/aboutme', { section: 'aboutme' });
						toggleMenu();
					}}
					aria-label="About"
				>
          About
				</NavLink>
				<NavLink
					href="#/"
					onClick={() => {
						updateDisplayedContent('/', { section: 'home' });
						toggleMenu();
					}}
					aria-label="Home"
				>
          Home
				</NavLink>
				<NavLink
					href="#/certifications"
					onClick={() => {
						updateDisplayedContent('/certifications', { section: 'certifications' });
						toggleMenu();
					}}
					aria-label="Certifications"
				>
          Certifications
				</NavLink>
				<NavLink
					href="#/services"
					onClick={() => {
						updateDisplayedContent('/services', { section: 'services' });
						toggleMenu();
					}}
					aria-label="Services"
				>
          Services
				</NavLink>
			</Menu>
		</Wrapper>
	);
};

export default HamburgerMenu;
