import { useState } from "react";
import CareerContent from "../career_components/CareerContent";
import Footer from "../components/Footer";
import Header from "../components/header";
import Modal from "../modal_components/Modal";

function Career() {
  let content = null;
  const [open, setOpen] = useState(false);

  const ControllModal = () => {
    open ? setOpen(false) : setOpen(true);
  };
  if (open === true) {
    content = <Modal ControllModal={ControllModal} concept={"career"} />;
  } else if (open === false) {
    content = null;
  }
  return (
    <>
      <Header />
      <CareerContent ControllModal={ControllModal} />
      {content}
      <Footer />
    </>
  );
}
export default Career;
