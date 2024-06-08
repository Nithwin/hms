// App.js
import React, { useState } from 'react';
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
import Room from './components/MainPage/Room.jsx'

import AHome from './components/MasterPage/Home'
import ASideBar from './components/MasterPage/NavBar'
import AAttendence from './components/MasterPage/Attendence'
import ALeave from './components/MasterPage/Leave'
import AMess from './components/MasterPage/Mess'
import ASuggestion from './components/MasterPage/Suggestion'
import AComplaint from './components/MasterPage/Complains.jsx'
import ARoom from './components/MasterPage/Room.jsx'

import { UserContext } from './components/MainPage/UserContext';

function App() {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /></>} />
          <Route path="/login" element={<><SLogin /></>} />
          <Route path="/admin" element={<><ALogin /></>} />
          <Route path="/about" element={<><Navbar /><About /></>} />
        </Routes>
        <Routes>
          <Route path="/hms" element={<div className='flex h-screen'><SideBar/> <MHome/></div>} />
          <Route path="/hms/attend" element={<div className='flex h-screen'><SideBar/> <Attendence/></div>} />
          <Route path="/hms/leave" element={<div className='flex h-screen'><SideBar/> <Leave/></div>} />
          <Route path="/hms/mess" element={<div className='flex h-screen'><SideBar/> <Mess/></div>} />
          <Route path="/hms/suggestion" element={<div className='flex h-screen'><SideBar/> <Suggestion/></div>} />
          <Route path="/hms/complaint" element={<div className='flex h-screen'><SideBar/> <Complaint/></div>} />
          <Route path="/hms/room" element={<div className='flex h-screen'><SideBar/> <Room/></div>} />
        </Routes>
        <Routes>
          <Route path="/ahms" element={<div className='flex h-screen'><SideBar/> <AHome/></div>} />
          <Route path="/ahms/attend" element={<div className='flex h-screen'><SideBar/> <AAttendence/></div>} />
          <Route path="/ahms/leave" element={<div className='flex h-screen'><SideBar/> <ALeave/></div>} />
          <Route path="/ahms/mess" element={<div className='flex h-screen'><SideBar/> <AMess/></div>} />
          <Route path="/ahms/suggestion" element={<div className='flex h-screen'><SideBar/> <ASuggestion/></div>} />
          <Route path="/ahms/complaint" element={<div className='flex h-screen'><SideBar/> <AComplaint/></div>} />
          <Route path="/ahms/room" element={<div className='flex h-screen'><SideBar/> <ARoom/></div>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
