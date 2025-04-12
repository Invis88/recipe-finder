import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
// Pages
import Home from './pages/Home'
import RecipePage from './pages/RecipePage'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<RecipePage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
