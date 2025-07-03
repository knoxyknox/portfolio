import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
 
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
};

export default App;
