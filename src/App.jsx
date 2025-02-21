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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/Reviews" element={<Reviews />} />
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
