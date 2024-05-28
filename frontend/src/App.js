import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/LandingPage/Users/Home';
import Contact from './components/LandingPage/Users/Contact';
import About from './components/LandingPage/Users/About';
import Navbar from './components/LandingPage/Users/NavBar'
import Login from './components/LandingPage/Pages/SLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
      </Routes>
    </Router>
  );
}

export default App;
