import './App.css';
import ContactInfo from './components/contactInfo/ContactInfo';
import { Routes, Route } from "react-router-dom";
import MyResume from './components/myResume/MyResume';
import Home from './components/home/Home';
import ThreeJs from './components/threeJsBackground/ThreeJsRoute';

function App() {

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/my-portfolio" element={<Home />}/>
          <Route path="/my-portfolio/ContactInfo" element={<ContactInfo />}/>
          <Route path="/my-portfolio/Resume" element={<MyResume />}/>
          <Route path="/my-portfolio/threejs" element={<ThreeJs />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
