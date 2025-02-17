function AuthButton({ text, primary }) {
    return (
      <button 
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          backgroundColor: primary ? "#F29188" : "#ccc",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        {text}
      </button>
    );
  }
  
  export default AuthButton;
  