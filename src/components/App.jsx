import { Route, Routes } from "react-router-dom";
import BoxShadowPage from "./pages/BoxShadowPage";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/box-shadow" element={<BoxShadowPage />} />
      </Routes>
    </div>
  );
};

export default App;
