/* eslint-disable react/react-in-jsx-scope */
import ContactForm from './ContactForm';
import { ImageDiv } from '../../utils';
import { ShadowedImg } from '../../utils';
import { InlineWidget } from 'react-calendly';
import { navItems } from '../mainLayout/navItems';

import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const ContactInfo = () => {
	const navigate = useNavigate();
	const contentRef = useRef(null);

	const updateDisplayedContent = (path, state) => {
		navigate(path, { state: state });
		contentRef.current.scrollTop = 0;
		console.log(contentRef);
	};
	return (
		<div style={{margin: '15px'}}>
			<ImageDiv>
				<ShadowedImg src="eddie_profile_pic.jpg" alt="Eddie Profile Picture" style={{maxHeight: '33vh'}}/>
			</ImageDiv>
			<div>
				<div>
					<h1 className="contact-info">Contact</h1>
					<ContactForm />
				</div>
				<div >
					{/* <h3><span><a href="https://calendly.com/eddiemoger_com/30min" target="_blank" rel="noopener noreferrer" title="Schedule a 30 minute appointment">Click here to schedule a 30 minute appointment</a></span></h3> */}
					<InlineWidget url="https://calendly.com/eddiemoger_com/30min" styles={{height: '1030px'}}/>
				</div>
				<h3 className="phone"><span><a href="tel:408-520-0140" title="click to call">Click to call 408-520-0140</a></span></h3>
				<h3 className="email"><span><a href="mailto:eddie@eddiemoger.com" rel="noopener" title="email Eddie@EddieMoger.com">Eddie@EddieMoger.com</a></span></h3>
				<h3 className="github"><span><a href="https://github.com/EddieJorden" target="_blank" rel="noopener noreferrer" title="Eddie Moger's Github">Github</a></span></h3>
				<h3 className="linkedin"><a href="https://www.linkedin.com/in/edward-moger-1a50b21bb/" target="_blank" rel="noopener noreferrer" title="Eddie Moger's Linkedin">Linkedin</a></h3>
				<h3 className="twitter"><a href="https://twitter.com/eddiemoger_com" target="_blank" rel="noopener noreferrer" title="Eddie Moger's Twitter">Twitter</a></h3>
				<h3 className="instagram"><a href="https://www.instagram.com/eddiemoger_com/" target="_blank" rel="noopener noreferrer" title="Eddie Moger's Instagram">Instagram</a></h3>
				{/* <h3 className="resume"><a href="Software-Engineer-Resume-May-2023.pdf" rel="noopener" title="Eddie Moger's Resume">Resume</a></h3> */}
				<h3 className="resume"
					onClick={() => 
						updateDisplayedContent(
							`${navItems[2].path}`,
							{section: '${navItems[2].section}'}
						)}
					href="#${navItems[2].section}"
					aria-label="${navItems[2].section}"
				>{navItems[2].section}
				</h3>
			</div>
		</div>
	);
};

export default ContactInfo;