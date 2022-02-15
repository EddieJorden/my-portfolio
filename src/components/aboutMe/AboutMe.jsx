import NavButton from "../navButton/NavButton";
import AboutMeDiv from "./AboutMeDiv";

const AboutMe = () => {
    return (
        <AboutMeDiv>
            <div style={{display: 'flex', flexDirection: 'column', fontSize: '12px'}}>
                <h1>About Me</h1>
                <list>
                <ul>Recognized for my engineering mind after learning how to use the software and hidden features on my first computer (when I was barely 2 years old).</ul>
                <ul>In first grade I learned how to use Mac terminal and was responsible for setting up the computers in the classroom for the other children and teachers.</ul>
                <ul>Interested in computers, when I was 8 years old I learned to modify Windows operating system by changing its binary code.</ul>
                <ul>In high school I Quickly learned Windows admin scripting and a few other technologies to successfully create automation's for software used by my peers.</ul>
                <ul>Since then I have Created multiple Wordpress and Square space sites as well as setup multiple online business' and services(such as communication and payment automation).</ul>
                <ul>My passion for software engineering was realized after completing two courses in Ruby.</ul>
                <ul>Deciding to change my career I chose to learn front end web development.</ul>
                <ul>Since then I have worked with many software technologies including HTML, CSS, Javascript, Node.js, React.js, redux, Jest, Enzyme and many more.</ul>
                <ul>Recently I conceptualized, planned, developed, released and currently maintain a fully custom built CRM where I have solved many complex business problems through technology.</ul>
                <ul>With over 50 completed projects on Github ranging from HTML to Redux and experience working together with other developers, currently I am learning back end web development and looking forward to a new team and a new project.</ul>
                <ul>Hopefully we can work together in the future.</ul>
                </list>
            <div class="button-container">
                <div class="contact-info">
                    <NavButton buttonText='Contact Info' linkTo='/ContactInfo'/>
                </div>
                <div class="home-button">
                    <NavButton buttonText='Home' linkTo='/'/>
                </div>
            </div>
            </div>
        </AboutMeDiv>
    );
};

export default AboutMe;