import { Link } from "react-router-dom";
import NavButton from "../navButton/NavButton";
import { ContactInfoDiv } from "./styled_ContactInfo";


const ContactInfo = () => {

    return (
        <ContactInfoDiv>
            <div class="image-div">
                <img src="eddieJorden.tech-it-at-office-monday.com-crm.jpeg" alt="Eddie in the office" />
            </div>
            <div class="contact-div">
                <list>
                    <ul><h1 class="contact-info">Contact Info</h1></ul>
                    <ul><h2 class="eddie-moger">Eddie Moger</h2></ul>
                    <ul><h3 class="email">email: <span><a href="mailto:emoger@gmail.com" rel="noopener">emoger@gmail.com</a></span></h3></ul>
                    <ul><h3 class="phone">phone: <span><a href="tel:650-218-6940">650-218-6940</a></span></h3></ul>
                    <ul><h3 class="github">github: <span><a href="https://github.com/EddieJorden" rel="noopener">My Github</a></span></h3></ul>
                    <ul><h3 class="linkedin">linkedIn: <a href="https://www.linkedin.com/in/edward-moger-1a50b21bb/" rel="noopener">My Linkedin</a></h3></ul>
                    <ul><h3 class="resume">resume: <Link to="/my-portfolio/Resume" rel="noopener">My Resume</Link></h3></ul>
                </list>
                <div class="button-container">
                    <NavButton buttonText='home' linkTo='/'/>
                </div>
            </div>
        </ContactInfoDiv>
    )
};

export default ContactInfo;