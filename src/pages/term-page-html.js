// This page will have the structure of the individual term alone with the
// the definition and a picture that serves as an example
import React from "react";
import Footer from "../components/footer";
import TermDisplay from "../components/term-page";
import Header from "../components/header";
import source from "../images/htmlExample.png";

function TermPage() {
  return (
    <div>
      <Header />
      <TermDisplay />
      <img src={source} alt="example" width="500"/>
      <Footer />
    </div>
  );
}

export default TermPage;
