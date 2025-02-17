import { useState } from "react";
import InputField from "./InputField";
import AuthButton from "./AuthButton";

function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // 화면 높이 기준 중앙 배치
      }}
    >
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px", // 폼 크기 조정
          padding: "20px",
        //   border: "1px solid #ccc",
        //   borderRadius: "10px",
        //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>로그인</h2>
        <InputField
          label="아이디"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <InputField
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-group">
          <AuthButton text="로그인" primary />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;


