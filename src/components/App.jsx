import { Route, Routes } from "react-router-dom";

import RockPaperScissors from "./pages/RockPaperScissors";
import PhotoTransformer from "./pages/PhotoTransformer";
import BoxShadowPage from "./pages/BoxShadowPage";
import TodosPage from "./pages/TodosPage";
import RandomHex from "./pages/RandomHex";
import Navbar from "./navigation/Navbar";
import Homepage from "./pages/Homepage";
import Notes from "./pages/Notes";

import solidIcons from "../assets/icons/solidIcons";
import Recipe from "./pages/Recipe";

solidIcons();

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/box-shadow" element={<BoxShadowPage />} />
        <Route path="/photo-transformer" element={<PhotoTransformer />} />
        <Route path="/random-hex" element={<RandomHex />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/todos" element={<TodoPage />} />
      </Routes>
    </div>
  );
};

export default App;
