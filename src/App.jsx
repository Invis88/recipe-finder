import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
// Pages
import Home from './pages/Home'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
