import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import SEO from "./seo.js";

import "../styles/global-styles.scss";
import "../styles/normalize.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SEO />
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
