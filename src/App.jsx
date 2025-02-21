import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Review from "./pages/Review";
import Reviews from "./pages/Reviews";
import MyPage from "./pages/MyPage";

import Admin from "./pages/Admin";

import Degree from "./pages/Degree";
import Career from "./pages/Career";
import Profile from "./pages/Profile";
import Family from "./pages/Family";
import Company from "./pages/Company";

import Test from "./pages/Test";
import { useEffect, useState } from "react";

import ReviewContent from "./review_components/ReviewContent"; // 추가

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8927/api/user/session", {
      // 요청 경로 수정
      withCredentials: true, // 쿠키 전달
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          return null;
        }
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/Reviews" element={<Reviews />} />
      <Route path="/review/:id" element={<ReviewContent />} /> {/* 상세 리뷰 페이지 */}

      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Degree" element={<Degree />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Family" element={<Family />} />
      <Route path="/Company" element={<Company />} />
      <Route path="/Test" element={<Test />} />
    </Routes>
  );
}

export default App;
