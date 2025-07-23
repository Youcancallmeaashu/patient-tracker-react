// pages/AppointmentBooking.jsx
import { useState } from "react";

const AppointmentBooking = () => {
  const [form, setForm] = useState({ doctor: "", date: "", time: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", form);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Doctor Name" name="doctor" value={form.doctor} onChange={handleChange} />
        <InputField label="Date" name="date" type="date" value={form.date} onChange={handleChange} />
        <InputField label="Time" name="time" type="time" value={form.time} onChange={handleChange} />
        <button className="bg-green-500 text-white px-4 py-2">Book</button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
