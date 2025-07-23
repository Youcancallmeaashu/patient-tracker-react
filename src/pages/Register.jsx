// pages/Register.jsx
import { useState } from "react";
import InputField from "../components/InputField";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", formData); // Later replace with API
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
