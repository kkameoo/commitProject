import { useState } from "react";
import DegreeContent from "../degree_components/DegreeContent";
import Footer from "../components/Footer";
import Header from "../components/header";
import Modal from "../modal_components/Modal";

function Degree() {
  let content = null;
  const [open, setOpen] = useState(false);

  const ControllModal = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const addDegree = (degree) => {
    const newDegree = {
      middleSchool: degree.middleSchool,
      highSchool: degree.highSchool,
      highSchoolMajor: degree.highSchoolMajor,
      university: degree.university,
      universityMajor: degree.universityMajor,
      graduate: degree.graduate,
      graduateMajor: degree.graduateMajor,
    };
    console.log(JSON.stringify(newDegree));
  };
  if (open === true) {
    content = (
      <Modal
        ControllModal={ControllModal}
        concept={"degree"}
        addState={addDegree}
      />
    );
  } else if (open === false) {
    content = null;
  }

  return (
    <>
      <Header />
      <DegreeContent ControllModal={ControllModal} />
      {content}
      <Footer />
    </>
  );
}
export default Degree;
