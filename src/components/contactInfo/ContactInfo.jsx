import { Link } from "react-router-dom";
import NavButton from "../navButton/NavButton";

const ContactInfo = () => {

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <span><img src="eddieJorden.tech-it-at-office-monday.com-crm.jpeg" alt="Eddie in the office" style={{width: '300px', margin: '60px'}}/></span>
                        </td>
                        <td style={{textAlign: 'left'}}>
                            <h1>Contact Info</h1>
                            <h2>Eddie Moger</h2>
                            <h3>email <span><a href="mailto:emoger@gmail.com">emoger@gmail.com</a></span></h3>
                            <h3>phone <span><a href="tel:650-218-6940">650-218-6940</a></span></h3>
                            <h3>github <span><a href="https://github.com/EddieJorden">My Github</a></span></h3>
                            <h3>linkedIn <a href="https://www.linkedin.com/in/edward-moger-1a50b21bb/">My Linkedin</a></h3>
                            <h3>Resume <Link to="/Resume">My Resume</Link></h3>
                            <NavButton buttonText='home' linkTo='/'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default ContactInfo;