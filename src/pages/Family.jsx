import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Modal from "../modal_components/Modal";
import FamilyContent from "../family_components/FamilyContent";
import { useLocation } from "react-router-dom";
import { useAuth } from "../App";
import NoInfo from "../family_components/NoInfo";

function Family() {
  const location = useLocation();
  // console.log(location);
  const [family, setFamily] = useState(location.state.family);
  const [open, setOpen] = useState(false);
  const apiUrl = "http://localhost:8927";
  const { userSession } = useAuth();

  let content = null;
  let mainContent = null;

  const ControllModal = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const modifyFamily = async (data) => {
    const newState = {
      ...family,
      mother: data.mother,
      father: data.father,
      child: data.child,
      sibling: data.sibling,
    };
    try {
      const response = await fetch(apiUrl + "/api/family/modify", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newState),
      });
      if (!response.ok) {
        throw new Error("데이터를 추가하지 못했습니다.");
      }
      console.log(newState);
      ControllModal();
    } catch (Error) {
      console.log(Error);
    }
  };

  const addFamilyInfo = async (data) => {
    const newState = {
      mother: data.mother,
      father: data.father,
      child: data.child,
      sibling: data.sibling,
      userId: userSession.id,
    };
    try {
      const response = await fetch(apiUrl + "/api/family/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newState),
      });
      if (!response.ok) {
        throw new Error("데이터를 추가하지 못했습니다.");
      }
      console.log(JSON.stringify(newState));
      getFamily();
      ControllModal();
    } catch (Error) {
      console.log(Error);
    }
  };

  const getFamily = async () => {
    try {
      const response = await fetch(apiUrl + "/api/family/" + userSession.id);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      setFamily(data);
    } catch (Error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    getFamily();
    // console.log("getfam발동");
  }, [family]);

  if (open === true) {
    content = (
      <Modal
        ControllModal={ControllModal}
        concept={"family"}
        familyInfo={family}
        modifyFamily={modifyFamily}
        addFamilyInfo={addFamilyInfo}
      />
    );
  } else if (open === false) {
    content = null;
  }

  if (family.id === "") {
    mainContent = (
      <>
        <div>테이블 없음 인서트 하러 가기</div>
        <NoInfo ControllModal={ControllModal} />
        {content}
      </>
    );
  } else {
    mainContent = (
      <>
        <FamilyContent ControllModal={ControllModal} family={family} />
        {content}
      </>
    );
  }

  return (
    <>
      {mainContent}
      <Footer />
    </>
  );
}
export default Family;
