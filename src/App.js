import './App.css';
import ContactInfo from './components/contactInfo/ContactInfo';
import { Routes, Route } from "react-router-dom";
import MyResume from './components/myResume/MyResume';
import ThreeJs from './components/threeJsBackground/ThreeJsRoute';
import AboutMe from './components/aboutMe/AboutMe';
import MyProjects from './components/myProjects/MyProjects';
import myProjectsArray from './components/myProjects/myProjectsArray';
import NewHome from './components/home/NewHome'

function App() {
  console.log('Thank you for showing interest in my portfolio ~Eddie Moger~')
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<NewHome myProjectsArray={myProjectsArray}/>}/>
          <Route path="/ContactInfo" element={<ContactInfo />}/>
          <Route path="/Resume" element={<MyResume />}/>
          <Route path="/threejs" element={<ThreeJs />}/>
          <Route path="/AboutMe" element={<AboutMe />}/>
          <Route path="/MyProjects" element={<MyProjects myProjectsArray={myProjectsArray}/>}/>
          <Route path="/newhome" element={<NewHome />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
