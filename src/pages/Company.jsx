import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FullPageScroll from "../company_components/FullPageScroll";

function Company() {
  const [transparentHeader, setTransparentHeader] = useState(false);

  return (
    <>
      
      <FullPageScroll setTransparentHeader={setTransparentHeader} />
      <Footer />
    </>
  );
}

export default Company;
