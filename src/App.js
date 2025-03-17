import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile'; // Import Profile Component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}
export default App;
