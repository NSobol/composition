import React from "react";
import Header from "../header/Header.jsx";
import Main from "../main/Main.jsx";
import Footer from "../footer/Footer.jsx";
import { dataHeader } from "../../data/dataHeader";

function Page(props) {
  return (
    <React.Fragment>
      <Header dataHeader={dataHeader} />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default Page;
