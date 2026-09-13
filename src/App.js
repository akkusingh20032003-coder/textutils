import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <Router>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter The text to analyze below" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;