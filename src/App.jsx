import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import DoctorPortal from "./Pages/DoctorPortal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/doctor-portal/*" element={<DoctorPortal />} />
    </Routes>
  );
}

export default App;