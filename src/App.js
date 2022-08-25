import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';

import HomePage from './pages/home.component';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/hats' element={<HatsPage/>} />
      </Routes >
      
    </div>
  );
} 

export default App;
