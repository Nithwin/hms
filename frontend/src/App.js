import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/LandingPage/Users/Home';
import Contact from './components/LandingPage/Users/Contact';
import About from './components/LandingPage/Users/About';
import Navbar from './components/LandingPage/Users/NavBar'
import SLogin from './components/LandingPage/Pages/SLogin';
import ALogin from './components/LandingPage/Pages/ALogin';
import MHome from './components/MainPage/Home'
import SideBar from './components/MainPage/NavBar'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/login" element={<><SLogin /></>} />
        <Route path="/adim" element={<><ALogin /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
      </Routes>
      <Routes>
        <Route path="/bms" element={<><SideBar/> <MHome/></>} />
      </Routes>
    </Router>
  );
}

export default App;
