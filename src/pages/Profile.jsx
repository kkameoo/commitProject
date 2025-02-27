import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Modal from "../modal_components/Modal";
import ProfileContent from "../profile_components/ProfileContent";
import { useAuth } from "../App";
import { useLocation } from "react-router-dom";


function Profile() {
  const location = useLocation();
  // console.log(location);
  const [profile, setProfile] = useState(location.state.degree);
  const [open, setOpen] = useState(false);
  const apiUrl = "http://localhost:8927";
  const { userSession } = useAuth();

  let content = null;
  let mainContent = null;

  const ControllModal = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const addProfile = (profile) => {
    const newProfile = {
      weight: profile.weight,
      height: profile.height,
      mbti: profile.mbti,
      hobby: profile.hobby,
      military: profile.military,
      religion: profile.religion,
      wealth: profile.wealth,
      marriage: profile.marriage,
      disease: profile.disease,
    };
    console.log(JSON.stringify(newProfile));
  };

  const getProfile = async () => {
    try {
      const response = await fetch(apiUrl + "/api/profile/" + userSession.id);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      setProfile(data);
    } catch (Error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    getProfile();
  }, [profile]);

  if (open === true) {
    content = (
      <Modal
        ControllModal={ControllModal}
        concept={"profile"}
        addState={addProfile}
      />
    );
  } else if (open === false) {
    content = null;
  }
  return (
    <>
      <ProfileContent ControllModal={ControllModal} />
      {content}
      <Footer />
    </>
  );
}
export default Profile;
