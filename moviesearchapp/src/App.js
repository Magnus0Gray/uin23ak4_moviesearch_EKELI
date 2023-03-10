import './css/main.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar'
import PageContent from './components/PageContent'

function App() {
	//const defaultpage = 0;
	return (
		<div className="container">
          <header>
                  <h1>Ressursarkiv</h1>
            </header>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Navigate replace to="/HTML" />}/>
                <Route index path=':category' element={<PageContent />} />
            </Routes>

       </div>

	);
}

export default App;
