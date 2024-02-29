import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import PetContainer from './PetContainer';
import './App.css';
import Navbar from './Navbar';
import MatchedPets from './MatchedPet';

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
              <Route path="/pets" element={<PetContainer />} />
              <Route path="/PetList" element={<MatchedPets />} />
            </Routes>
            </div>
          </section>
        </div>
      </div>
  );
};

export default App;