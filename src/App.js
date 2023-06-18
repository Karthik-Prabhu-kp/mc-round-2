import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Archive from "./pages/Archive/Archive";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}
