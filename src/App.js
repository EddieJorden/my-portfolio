/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import myProjectsArray from './components/myProjects/myProjectsArray';
import NewHome from './components/home/NewHome';

function App() {
	console.log('Thank you for showing interest in EddieMoger.com ~Eddie Moger~');
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<NewHome myProjectsArray={myProjectsArray} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
