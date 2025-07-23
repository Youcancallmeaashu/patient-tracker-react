// components/InputField.jsx
const InputField = ({ label, name, type = "text", value, onChange }) => (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border px-3 py-2 w-full"
        required
      />
    </div>
  );
  
  export default InputField;
  