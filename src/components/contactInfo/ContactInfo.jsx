import { Routes, Route, Link } from "react-router-dom";
import NavButton from "../navButton/NavButton";

const ContactInfo = () => {

    return (
        <div>
            <table>
                <tr>
                    <td>
                        <span><img src="eddieJorden.tech-it-at-office-monday.com-crm.jpeg" style={{width: '300px', margin: '60px'}}/></span>
                    </td>
                    <td style={{textAlign: 'left'}}>
                        <h1>Contact Info</h1>
                        <h2>Eddie Moger</h2>
                        <h3>email <span><a href="mailto:emoger@gmail.com">emoger@gmail.com</a></span></h3>
                        <h3>phone <span><a href="tel:650-218-6940">650-218-6940</a></span></h3>
                        <h3><a href="https://www.linkedin.com/in/edward-moger-1a50b21bb/">my linkedIn</a></h3>
                        <h3><Link to="/Resume">Resume</Link></h3>
                        <NavButton buttonText='home' linkTo='/'/>
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default ContactInfo;