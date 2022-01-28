import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage';
import Lifecycle from './pages/LifeCycle';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/lifecycle/:id" element={<Lifecycle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
