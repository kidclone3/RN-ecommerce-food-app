// import React from 'react';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import { Routes, Route, Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <h1>React Player</h1>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  )
}

export default App;
