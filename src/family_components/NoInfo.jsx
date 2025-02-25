import { useNavigate } from "react-router-dom";
import FamilyButton from "./FamilyButton";

function NoInfo({ ControllModal }) {
  const navigate = useNavigate();

  return (
    <>
      <FamilyButton onClick={() => ControllModal()} text={"입력하기"} />
      <FamilyButton onClick={() => navigate("/MyPage")} text={"뒤로가기"} />
    </>
  );
}
export default NoInfo;
