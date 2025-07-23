// components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-blue-600 text-white flex justify-between">
    <div className="font-bold text-xl">MediTrack</div>
    <div className="space-x-4">
      <Link to="/">Dashboard</Link>
      <Link to="/appointments">Appointments</Link>
      <Link to="/prescriptions">Prescriptions</Link>
    </div>
  </nav>
);

export default Navbar;
