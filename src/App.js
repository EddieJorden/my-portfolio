import './App.css';
import ContactInfo from './components/contactInfo/ContactInfo';
import { Routes, Route } from "react-router-dom";
import MyResume from './components/myResume/MyResume';
import Home from './components/home/Home';
import ThreeJs from './components/threeJsBackground/ThreeJsRoute';
import AboutMe from './components/aboutMe/AboutMe';
import MyProjects from './components/myProjects/MyProjects';

function App() {

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/ContactInfo" element={<ContactInfo />}/>
          <Route path="/Resume" element={<MyResume />}/>
          <Route path="/threejs" element={<ThreeJs />}/>
          <Route path="/AboutMe" element={<AboutMe />}/>
          <Route path="/MyProjects" element={<MyProjects />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
