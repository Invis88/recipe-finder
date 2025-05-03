import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
