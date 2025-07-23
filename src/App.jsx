import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AppointmentBooking from "./pages/AppointmentBooking";
import Prescriptions from "./pages/Prescriptions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<AppointmentBooking />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
      </Routes>
    </Router>
  );
}

export default App;
