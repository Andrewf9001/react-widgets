import { Route, Routes } from "react-router-dom";

import BoxShadowPage from "./pages/BoxShadowPage";
import Homepage from "./pages/Homepage";
import Navbar from "./navigation/Navbar";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/box-shadow" element={<BoxShadowPage />} />
      </Routes>
    </div>
  );
};

export default App;
