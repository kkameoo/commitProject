function SelectField({ label, options, selected, onChange }) {
    return (
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", fontSize: "14px", marginBottom: "5px" }}>{label}</label>
        <select 
          value={selected} 
          onChange={(e) => onChange(e.target.value)} 
          style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
        >
          <option value="">선택하세요</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
  
  export default SelectField;
  