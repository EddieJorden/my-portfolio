import { Link } from "react-router-dom";
import NavButton from "../navButton/NavButton";
import { ContactInfoDiv } from "./styled_ContactInfo";


const ContactInfo = () => {

    return (
        <ContactInfoDiv>
            <img src="eddieJorden.tech-it-at-office-monday.com-crm.jpeg" alt="Eddie in the office" />
            <div class="contact-info">
                <list >
                    <ul><h1>Contact Info</h1></ul>
                    <ul><h2>Eddie Moger</h2></ul>
                    <ul><h3>email: <span><a href="mailto:emoger@gmail.com">emoger@gmail.com</a></span></h3></ul>
                    <ul><h3>phone: <span><a href="tel:650-218-6940">650-218-6940</a></span></h3></ul>
                    <ul><h3>github: <span><a href="https://github.com/EddieJorden">My Github</a></span></h3></ul>
                    <ul><h3>linkedIn: <a href="https://www.linkedin.com/in/edward-moger-1a50b21bb/">My Linkedin</a></h3></ul>
                    <ul><h3>resume: <Link to="/my-portfolio/Resume">My Resume</Link></h3></ul>
                    <ul>
                        <NavButton buttonText='home' linkTo='/'/>
                    </ul>
                </list>
            </div>
        </ContactInfoDiv>
    )
};

export default ContactInfo;