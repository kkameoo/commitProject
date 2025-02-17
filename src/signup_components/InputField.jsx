function InputField({ label, type, value, onChange }) {
    return (
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", fontSize: "14px", marginBottom: "5px" }}>{label}</label>
        <input 
          type={type} 
          value={value} 
          onChange={onChange} 
          style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }} 
        />
      </div>
    );
  }
  
  export default InputField;
  