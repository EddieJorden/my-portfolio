/* eslint-disable react/react-in-jsx-scope */
import './App.css';

import myProjectsArray from './components/myProjects/myProjectsArray';
import MainLayout from './components/mainLayout/MainLayout';

function App() {
	console.log('Thank you for showing interest in EddieMoger.com ~Eddie Moger~');
	return (
		<div className="App">
			<MainLayout myProjectsArray={myProjectsArray} />
		</div>
	);
}

export default App;
