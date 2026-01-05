import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css"; // Keeping your existing style import
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    // Requirement: Set up BrowserRouter
    <BrowserRouter>
      <div>
        {/* Do not remove the main div */}
        <Routes>
          {/* Requirement: Home route at '/' */}
          <Route path="/" element={<ItemList />} />
          
          {/* Requirement: Dynamic route at '/items/{id}' */}
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
