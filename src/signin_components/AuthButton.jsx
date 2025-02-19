function AuthButton({ text, primary, sendLoginInfo }) {
  return (
    <button
      className={primary ? "btn primary" : "btn"}
      onClick={() => sendLoginInfo()}
    >
      {text}
    </button>
  );
}

export default AuthButton;
