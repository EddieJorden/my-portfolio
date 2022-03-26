import './App.css';
import { Routes, Route } from "react-router-dom";
import myProjectsArray from './components/myProjects/myProjectsArray';
import NewHome from './components/home/NewHome'

function App() {
  console.log('Thank you for showing interest in my portfolio ~Eddie Moger~')
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<NewHome myProjectsArray={myProjectsArray}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
