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
import Attendence from './components/MainPage/Attendence'
import Leave from './components/MainPage/Leave'
import Mess from './components/MainPage/Mess'
import Suggestion from './components/MainPage/Suggestion'
import Complaint from './components/MainPage/Complains.jsx'
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
        <Route path="/hms" element={<div className='flex h-screen'><SideBar/> <MHome/></div>} />
        <Route path="/hms/attend" element={<div className='flex h-screen'><SideBar/> <Attendence/></div>} />
        <Route path="/hms/leave" element={<div className='flex h-screen'><SideBar/> <Leave/></div>} />
        <Route path="/hms/mess" element={<div className='flex h-screen'><SideBar/> <Mess/></div>} />
        <Route path="/hms/suggestion" element={<div className='flex h-screen'><SideBar/> <Suggestion/></div>} />
        <Route path="/hms/complaint" element={<div className='flex h-screen'><SideBar/> <Complaint/></div>} />
      </Routes>
    </Router>
  );
}

export default App;
