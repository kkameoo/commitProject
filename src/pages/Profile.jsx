import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/header";
import Modal from "../modal_components/Modal";
import ProfileContent from "../profile_components/ProfileContent";

function Profile() {
  let content = null;
  const [open, setOpen] = useState(false);

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
      <Header />
      <ProfileContent ControllModal={ControllModal} />
      {content}
      <Footer />
    </>
  );
}
export default Profile;
