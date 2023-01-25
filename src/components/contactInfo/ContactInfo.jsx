/* eslint-disable react/react-in-jsx-scope */
import ComponentDiv from '../componentDiv/ComponentDiv';
import styled from 'styled-components';

export const ContactInfoDiv = styled.div`
min-height: 100%;
max-height: 100%;
max-width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
text-wrap: none;

img {
    max-height: 80%;
    max-width: 30%;

    @media only screen and (max-width: 900px) {
        max-width: 100%;
    }
}

.imag-div {
    max-height: 100%;
    max-width: 80%;
}

ul {
    padding-inline-start: 0px;
    margin: 0px;
}

.contact-info-div {
    margin: 30px;
    font-weight: 900;
}

.contact-div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-info, .eddie-moger {
    margin: 10px;
    margin-left: 10px;
}

.eddie-moger {
    margin: 10px;
}

.email {
    margin-top: 0px;
}

h3 {
    margin: 12px;
}

.button-container {
    padding: 4px;
}

.email {
    color: grey
}

.phone {
    color: grey
}

.github {
    color: grey
}

.linkedin {
    color: grey
}

.resume {
    color: grey
}

}
`;

const ContactInfo = () => {

	return (
		<ContactInfoDiv>
			<div className="image-div" style={{margin: '15px 0px 0px 0px'}}>
				<img src="eddie_profile_pic.jpg" alt="Eddie Profile Picture" />
			</div>
			<div className="contact-div">
				<ComponentDiv>
					<div>
						<div className='contact-info-div' style={{margin: '3px 30px 30px 30px'}}>
							<h1 className="contact-info">Contact Info</h1>
							<h2 className="eddie-moger">Eddie Moger</h2>
						</div>
						<h3 className="email"><span><a href="mailto:eddie@eddiemoger.com" rel="noopener">Email</a></span></h3>
						<h3 className="github"><span><a href="https://github.com/EddieJorden" rel="noopener">Github</a></span></h3>
						<h3 className="linkedin"><a href="https://www.linkedin.com/in/edward-moger-1a50b21bb/" rel="noopener">Linkedin</a></h3>
						<h3 className="resume"><a href="Eddie Moger Software Engineer Resume.pdf" rel="noopener">Resume</a></h3>
					</div>
				</ComponentDiv>
			</div>
		</ContactInfoDiv>
	);
};

export default ContactInfo;