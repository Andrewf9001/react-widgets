import { Route, Routes } from "react-router-dom";

import RockPaperScissors from "./pages/RockPaperScissors";
import PhotoTransformer from "./pages/PhotoTransformer";
import BoxShadowPage from "./pages/BoxShadowPage";
import RandomHex from "./pages/RandomHex";
import Navbar from "./navigation/Navbar";
import Homepage from "./pages/Homepage";

import solidIcons from "../assets/icons/solidIcons";

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
      </Routes>
    </div>
  );
};

export default App;
