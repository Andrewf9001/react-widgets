import { Route, Routes } from "react-router-dom";

import PhotoTransformer from "./pages/PhotoTransformer";
import BoxShadowPage from "./pages/BoxShadowPage";
import Navbar from "./navigation/Navbar";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/box-shadow" element={<BoxShadowPage />} />
        <Route path="/photo-transformer" element={<PhotoTransformer />} />
      </Routes>
    </div>
  );
};

export default App;
