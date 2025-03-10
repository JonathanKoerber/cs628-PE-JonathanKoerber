import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe";
import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router";

function App() {
  return (
    <BrowserRouter className="App">
        <Routes>
            <Route index element={<Recipes/>} />
            <Route path="/addRecipe" element={<AddRecipe/>} />
            <Route path="/editRecipe/:id" element={<EditRecipe/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
