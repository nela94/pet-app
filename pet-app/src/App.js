import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import PetContainer from './PetContainer';
import './App.css';
import Navbar from './Navbar';

const App = () => {
  return (
 
    <div className="App">
        <div className="container">
          <header>
            <Navbar/>
          </header>
          <section>
            <div id="container_demo" >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/petss" element={<PetContainer />} />
            </Routes>
            </div>
          </section>
        </div>
      </div>
  );
};

export default App;