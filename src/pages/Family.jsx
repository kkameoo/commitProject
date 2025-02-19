import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import Modal from "../modal_components/Modal";
import FamilyContent from "../family_components/FamilyContent";

function Family() {
  let content = null;
  const [open, setOpen] = useState(false);

  const ControllModal = () => {
    open ? setOpen(false) : setOpen(true);
  };
  if (open === true) {
    content = <Modal ControllModal={ControllModal} concept={"family"} />;
  } else if (open === false) {
    content = null;
  }
  return (
    <>
      <Header />
      <FamilyContent ControllModal={ControllModal} />
      {content}
      <Footer />
    </>
  );
}
export default Family;
