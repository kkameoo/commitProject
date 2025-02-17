import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Review from "./pages/Review";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Review" element={<Review />} />
    </Routes>
  );
}

export default App;
