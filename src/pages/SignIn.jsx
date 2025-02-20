import Header from "../components/header";
import LoginForm from "../signin_components/LoginForm";
import Footer from "../components/Footer";
import { useState } from "react";

function SignIn() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const sendLoginInfo = () => {
    const loginInfo = {
      userId: userId,
      password: password,
    };
    console.log(JSON.stringify(loginInfo));
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
