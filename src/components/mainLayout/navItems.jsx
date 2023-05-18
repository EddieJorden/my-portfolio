import React from 'react';
import ContactInfo from '../contactInfo/ContactInfo';
import MyProjects from '../myProjects/MyProjects';
import Myresume from '../myResume/MyResume';
import Home from '../home/Home';
import AboutMe from '../aboutMe/AboutMe';
import Certifications from '../certifications/Certifications';
import Services from '../services/Services';
// import Blog from '../blog/Blog';

export const navItems = [
	{
		path: '/contact',
		section: 'Contact',
		element: <ContactInfo />,
		title: 'Contact Info',
	},
	{
		path: '/myProjects',
		section: 'Projects',
		element: <MyProjects />,
		title: 'My Projects',
	},
	{
		path: '/resume',
		section: 'Resume',
		element: <Myresume />,
		title: 'My Resume',
	},
	{
		path: '/aboutMe',
		section: 'About',
		element: <AboutMe />,
		title: 'About Me',
	},
	{
		path: '/',
		section: 'Home',
		element: <Home />,
		title: 'Home',
	},
	{
		path: '/certifications',
		section: 'Certifications',
		element: <Certifications />,
		title: 'Certifications',
	},
	{
		path: '/services',
		section: 'Services',
		element: <Services />,
		title: 'Services',
	},
	// {
	// 	path: '/blog',
	// 	section: 'Blog'
	// 	element: <Blog />,
	// 	title: 'Blog',
	// }
];
