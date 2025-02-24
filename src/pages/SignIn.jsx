import Header from "../components/header";
import LoginForm from "../signin_components/LoginForm";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({getSession}) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const apiUrl = "http://localhost:8927";
  const navigate = useNavigate();
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
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
          
        },
        
      );
      if (!response.ok) {
        throw new Error("데이터를 추가하지 못했습니다.");
      }
      console.log(JSON.stringify(loginInfo));
      getSession();
      navigate("/");
    } catch (Error) {      
      console.log(Error);
    }
  };

  return (
    <>
      
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
