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

  const addFamily = (family) => {
    const newFamily = {
      mother: family.mother,
      father: family.father,
      child: family.child,
      sibling: family.sibling,
    };
    console.log(JSON.stringify(newFamily));
  };

  if (open === true) {
    content = (
      <Modal
        ControllModal={ControllModal}
        concept={"family"}
        addState={addFamily}
      />
    );
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
