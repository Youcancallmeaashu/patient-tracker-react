// pages/Dashboard.jsx
const Dashboard = () => {
    const user = { name: "Anshul", email: "anshul130105@gmail.com" }; // static for now
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
        <h3 className="mt-6 font-semibold">Upcoming Appointments</h3>
        <ul className="list-disc ml-6">
          <li>25 July, 10:00 AM - Dr. Patel</li>
          <li>30 July, 3:00 PM - Dr. Sharma</li>
        </ul>
      </div>
    );
  };
  
  export default Dashboard;
  