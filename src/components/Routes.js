import { Routes, Route } from "react-router-dom";
import DriftPage from "./DriftPage";
import ForzaPage from "./ForzaPage";
import HomePage from "./HomePage";
import TimeAttackPage from "./TimeAttackPage";

const Router = () => {
  return (
    <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
    </div>
  );
};

export {Router};