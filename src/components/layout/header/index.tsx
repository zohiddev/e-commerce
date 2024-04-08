import React from "react";
import { HeaderTop } from "./components";

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <div className="header-middle"></div>
      <div className="header-bottom"></div>
    </header>
  );
}

export default Header;
