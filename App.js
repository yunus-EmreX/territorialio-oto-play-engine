import './App.css';

import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './pages/Home';
import ProTanki from './pages/ProTanki';

// <div className="App">
function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/protanki" element={<ProTanki/>}/>
      </Routes>
    </Router>
  );
}

export default App;