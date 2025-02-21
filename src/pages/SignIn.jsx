import Header from "../components/header";
import LoginForm from "../signin_components/LoginForm";
import Footer from "../components/Footer";
import { useState } from "react";

function SignIn() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const apiUrl = "http://localhost:8927";

  const sendLoginInfo = async () => {
    const loginInfo = {
      email: userId,
      password: password,
    };
    try {
      const response = await fetch(
        apiUrl + "/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        },
        { withCredentials: true }
      );
      if (!response.ok) {
        throw new Error("데이터를 추가하지 못했습니다.");
      }
      console.log(JSON.stringify(loginInfo));
    } catch (Error) {
      console.log(Error);
    }
  };

  return (
    <>
      <Header />
      <LoginForm
        userId={userId}
        setUserId={setUserId}
        password={password}
        setPassword={setPassword}
        sendLoginInfo={sendLoginInfo}
      />
      <Footer />
    </>
  );
}

export default SignIn;
