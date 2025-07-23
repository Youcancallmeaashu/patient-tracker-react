// pages/Prescriptions.jsx
const Prescriptions = () => {
    const prescriptions = [
      { id: 1, doctor: "Dr. Jain", date: "2025-07-20", medicine: "Paracetamol 500mg" },
      { id: 2, doctor: "Dr. Smith", date: "2025-07-15", medicine: "Amoxicillin 250mg" },
    ];
  
    return (
      <div className="p-4">
        <h2 className="text-xl mb-4">My Prescriptions</h2>
        <ul className="space-y-2">
          {prescriptions.map((p) => (
            <li key={p.id} className="border p-2">
              <p><strong>Doctor:</strong> {p.doctor}</p>
              <p><strong>Date:</strong> {p.date}</p>
              <p><strong>Medicine:</strong> {p.medicine}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Prescriptions;
  