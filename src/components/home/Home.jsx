import NavButton from "../navButton/NavButton";

const Home = () => {
    return (
        <div>
            <h1>This is the Home Page</h1>
            <div>
                <div><NavButton buttonText="Contact Info" linkTo='/ContactInfo'/><span><NavButton buttonText="Resume" linkTo='/Resume'/></span></div>
            </div>
            
            
        </div>
    )
};

export default Home;