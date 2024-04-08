import React from "react";
import { HeaderBottom, HeaderMiddle, HeaderTop } from "./components";

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom/>
    </header>
  );
}

export default Header;
