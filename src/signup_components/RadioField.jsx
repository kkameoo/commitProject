function RadioField({ label, options, selected, onChange }) {
    return (
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", fontSize: "14px", marginBottom: "5px" }}>{label}</label>
        {options.map((option, index) => (
          <label key={index} style={{ marginRight: "10px" }}>
            <input 
              type="radio" 
              name={label} 
              value={option} 
              checked={selected === option} 
              onChange={() => onChange(option)} 
            />
            {option}
          </label>
        ))}
      </div>
    );
  }
  
  export default RadioField;
  