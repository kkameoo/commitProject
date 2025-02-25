import { useNavigate } from "react-router-dom";
import CareerButton from "./CareerButton";

function NoInfo({ ControllModal }) {
  const navigate = useNavigate();

  return (
    <>
      <CareerButton onClick={() => ControllModal()} text={"입력하기"} />
      <CareerButton onClick={() => navigate("/MyPage")} text={"뒤로가기"} />
    </>
  );
}
export default NoInfo;
