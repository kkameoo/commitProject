function CheckboxField({ label, options, selected, onChange }) {
    const handleChange = (option) => {
      if (selected.includes(option)) {
        onChange(selected.filter((item) => item !== option));
      } else {
        onChange([...selected, option]);
      }
    };
  
    return (
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", fontSize: "14px", marginBottom: "5px" }}>{label}</label>
        {options.map((option, index) => (
          <label key={index} style={{ marginRight: "10px" }}>
            <input 
              type="checkbox" 
              value={option} 
              checked={selected.includes(option)} 
              onChange={() => handleChange(option)} 
            />
            {option}
          </label>
        ))}
      </div>
    );
  }
  
  export default CheckboxField;
  