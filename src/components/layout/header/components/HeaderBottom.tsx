import { headerIcons } from "@/constants/header-icons";
import React from "react";

function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="header-bottom__row">
          {headerIcons.map((item) => (
            <button className="header-bottom__button" key={item.id}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
