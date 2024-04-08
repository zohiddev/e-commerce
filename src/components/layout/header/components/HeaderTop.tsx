import { LocationIcon, PhoneIcon } from "@/assets/icons";
import React from "react";
import LanguageSelect from "./LanguageSelect";

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-row">
          <div className="header-top__links">
            <a href="#" className="header-link">
              <span className="header-link__icon">
                <LocationIcon />
              </span>
              <span className="header-link__text">Urganch</span>
            </a>
            <a href="#" className="header-link">
              <span className="header-link__text">Do‘konlar</span>
            </a>
          </div>

          <div className="header-top__row">
            <a href="tel:+998991234567" className="header-link header-link__phone">
              <span className="header-link__icon">
                <PhoneIcon />
              </span>
              <span className="header-link__text">+998 99 123 45 67</span>
            </a>
            <p className="header-top__time">Ish vaqti: 8:00 - 22:00</p>
            <LanguageSelect />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
