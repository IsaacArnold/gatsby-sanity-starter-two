import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import "../styles/global-styles.scss";
import "../styles/normalize.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
