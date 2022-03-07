import { Link } from "react-router-dom";
import NavButton from "../navButton/NavButton";
import { ContactInfoDiv } from "./styled_ContactInfo";
import ComponentDiv from "../componentDiv/ComponentDiv";


const ContactInfo = () => {

    return (
        <ContactInfoDiv>
            <div className="image-div">
                <img src="eddie_profile_pic.jpg" alt="Eddie in the office" />
            </div>
            <div className="contact-div">
                <ComponentDiv>
                    <ul>
                        <div className='contact-info-div'>
                            <h1 className="contact-info">Contact Info</h1>
                            <h2 className="eddie-moger">Eddie Moger</h2>
                        </div>
                        <h3 className="email">email: <span><a href="mailto:emoger@gmail.com" rel="noopener">emoger@gmail.com</a></span></h3>
                        <h3 className="phone">phone: <span><a href="tel:650-218-6940">650-218-6940</a></span></h3>
                        <h3 className="github">github: <span><a href="https://github.com/EddieJorden" rel="noopener">My Github</a></span></h3>
                        <h3 className="linkedin">linkedIn: <a href="https://www.linkedin.com/in/edward-moger-1a50b21bb/" rel="noopener">My Linkedin</a></h3>
                        <h3 className="resume">resume: <Link to="/Resume" rel="noopener">My Resume</Link></h3>
                        <div className="button-container">
                            <NavButton buttonText='home' linkTo='/'/>
                        </div>
                    </ul>
                </ComponentDiv>
            </div>
        </ContactInfoDiv>
    )
};

export default ContactInfo;