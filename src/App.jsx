import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Review from "./pages/Review";
import Reviews from "./pages/Reviews";
import MyPage from "./pages/MyPage";

import Admin from "./pages/Admin";

import Degree from "./pages/Degree";

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

    </Routes>
  );
}

export default App;
