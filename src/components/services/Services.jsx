/* eslint-disable react/react-in-jsx-scope */
import { CallToActionButton, TextDiv } from '../../utils';
import { useNavigate } from 'react-router-dom';

const Services = () => {
	const navigate = useNavigate();
	const updateDisplayedContent = (path) => {
		navigate(path);
	};

	return (
		<div >
			<h1>Web Development Services</h1>
			<h3>Contact me for a free conusltaion</h3>
			<CallToActionButton onClick={() =>
				updateDisplayedContent('/contactinfo')
			}>Contact Me</CallToActionButton>
			<h3>Description</h3>
			<TextDiv>
			I offer web development services to help businesses and individuals create a strong online presence. Whether you need a simple website or a complex e-commerce platform, I can help you achieve your goals.
			</TextDiv>
			<h3>Specialties</h3>
			<TextDiv>My specialties include custom web development, CMS-based website development, front-end development, and responsive design.</TextDiv>
			<h3>Prices</h3>
			<TextDiv>Basic Website: $1,000 - $5,000</TextDiv>
			<TextDiv>Custom Website: $5,000 - $25,000</TextDiv>
			<TextDiv>E-commerce Website: $10,000 - $50,000</TextDiv>
			<TextDiv>Custom Web Application: $20,000 - $100,000+</TextDiv>
			<h3>Contact me for a free conusltaion</h3>
			<CallToActionButton onClick={() =>
				updateDisplayedContent('/contactinfo')
			}>Contact Me</CallToActionButton>
			<h1>SEO Services</h1>
			<h3>Description</h3>
			<TextDiv>
			I offer SEO services to help businesses improve their website&apos;s visibility on search engines like Google, Bing, and Yahoo. Whether you&apos;re looking to rank higher for specific keywords or improve your overall online presence, I can help you achieve your goals.
			</TextDiv>
			<h3>Specialties</h3>
			<TextDiv>
			My specialties include keyword research, on-page optimization, off-page optimization, local SEO, technical SEO, and SEO audits.
			</TextDiv>
			<h3>Prices</h3>
			<TextDiv>Prices for SEO services typically range from $500 to $5,000 per month, depending on the scope of the project and the level of competition in your industry. Some of the factors that can impact pricing include the size of your website, the number of target keywords, and the amount of content required. I offer customized SEO packages tailored to each client&apos;s unique needs and budget.</TextDiv>
			<TextDiv>Basic SEO: $500 - $1,500 per month</TextDiv>
			<TextDiv>Advanced SEO: $1,500 - $3,000 per month</TextDiv>
			<TextDiv>Local SEO: $3,000 - $5,000 per month</TextDiv>
			<TextDiv>Keyword research: $500 - $2,000 per month</TextDiv>
			<TextDiv>SEO audit: $1,000 - $5,000 per project</TextDiv>
			<h3>Contact me for a free conusltaion</h3>
			<CallToActionButton onClick={() =>
				updateDisplayedContent('/contactinfo')
			}>Contact Me</CallToActionButton>
			<h1>Website Maintenance Services</h1>
			<h3>Description</h3>
			<TextDiv>
			I offer website maintenance services to ensure that your website is always up-to-date and running smoothly. From software updates to security checks, I can help you keep your website running smoothly.
			</TextDiv>
			<h3>Specialties</h3>
			<TextDiv>My specialties include website updates, content management, website backups, and website security.</TextDiv>
			<h3>Prices</h3>
			<TextDiv> Prices for website maintenance services typically range from $100 to $1,000 per month, depending on the scope of the project. Some of the factors that can impact pricing include the size of your website, the number of updates required, and the amount of content required. I offer customized website maintenance packages tailored to each client&apos;s unique needs and budget.</TextDiv>
			<TextDiv>Basic Maintenance: $100 - $500 per month</TextDiv>
			<TextDiv>Content Updates: $500 - $1,500 per month</TextDiv>
			<TextDiv>Security and Backups: $1,500 - $3,000 per month</TextDiv>
			<h3>Contact me for a free conusltaion</h3>
			<CallToActionButton onClick={() =>
				updateDisplayedContent('/contactinfo')
			}>Contact Me</CallToActionButton>
			<h1>E-Commerce Development Services</h1>
			<h3>Description</h3>
			<TextDiv>I offer e-commerce development services to help businesses build a robust online store. From setting up a payment gateway to creating a product catalog, I can help you create an online store that generates revenue.</TextDiv>
			<h3>Specialties</h3>
			<TextDiv>My specialties include e-commerce development, payment gateway integration, product catalog creation, and e-commerce SEO.</TextDiv>
			<h3>Prices</h3>
			<TextDiv>Prices for e-commerce development services typically range from $10,000 to $50,000, depending on the scope of the project. Some of the factors that can impact pricing include the number of products, the number of payment gateways, and the amount of content required. I offer customized e-commerce development packages tailored to each client&apos;s unique needs and budget.</TextDiv>
			<TextDiv>Basic E-Commerce: $10,000 - $25,000</TextDiv>
			<TextDiv>Custom E-Commerce: $25,000 - $50,000</TextDiv>
			<h3>Contact me for a free conusltaion</h3>
			<CallToActionButton onClick={() =>
				updateDisplayedContent('/contactinfo')
			}>Contact Me</CallToActionButton>
			<h1>API Development Services</h1>
			<h3>Description</h3>
			<TextDiv>I offer API development services to help businesses integrate their website with third-party applications. From creating a custom API to integrating with a third-party API, I can help you create a seamless user experience.</TextDiv>
			<h3>Specialties</h3>
			<TextDiv>My specialties include API development, API integration, and API documentation.</TextDiv>
			<h3>Prices</h3>
			<TextDiv>Prices for API development services typically range from $20,000 to $100,000+, depending on the scope of the project. Some of the factors that can impact pricing include the number of API endpoints, the number of third-party APIs, and the amount of content required. I offer customized API development packages tailored to each client&apos;s unique needs and budget.</TextDiv>
			<TextDiv>Basic API: $20,000 - $50,000</TextDiv>
			<TextDiv>Custom API: $50,000 - $100,000+</TextDiv>
			<TextDiv>REST API Development: $10,000 - $30,000</TextDiv>
			<TextDiv>GraphQL API Development: $20,000 - $50,000</TextDiv>
			<TextDiv>API Integration: $5,000 - $20,000</TextDiv>
			<TextDiv>API Documentation: $2,500 - $10,000</TextDiv>
			<h3>Contact me for a free conusltaion</h3>
			<CallToActionButton style={{marginBottom: '15px'}} onClick={() =>
				updateDisplayedContent('/contactinfo')
			}>Contact Me</CallToActionButton>
			
		</div>
	);
};

export default Services;