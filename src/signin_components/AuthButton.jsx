function AuthButton({ text, primary }) {
    return (
      <button className={primary ? "btn primary" : "btn"}>{text}</button>
    );
  }
  
  export default AuthButton;
  