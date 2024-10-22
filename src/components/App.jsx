import { Route, Routes } from "react-router-dom";

import BoxShadowPage from "./pages/BoxShadowPage";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/box-shadow" element={<BoxShadowPage />} />
      </Routes>
    </div>
  );
};

export default App;
