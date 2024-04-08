import { CartIcon, CompareIcon, HeartIcon, MenuIcon, SearchIcon, UserIcon } from "@/assets/icons";
import React from "react";

function HeaderMiddle() {
  return (
    <div className="header-middle">
      <div className="container">
        <div className="header-middle__content">
          <div className="header-logo">
            <img src="/images/logo.png" alt="site logo" />
          </div>

          <div className="header-middle__row">
            <button className="header-button header-button__category">
              <span className="header-button__icon">
                <MenuIcon />
              </span>
              <span className="header-button__text">Katalog</span>
            </button>

            <form className="header-search">
              <input
                type="text"
                className="header-search__input"
                placeholder="Qidirishni xohlayman..."
              />
              <button className="header-search__button">
                <SearchIcon />
              </button>
            </form>
          </div>

          <div className="header-middle__row">
            <button className="header-middle__button">
                <span className="header-middle__button_icon">
                    <HeartIcon/>
                </span>
                <span className="header-middle__button_text">Saqlanganlar</span>
            </button>
            <button className="header-middle__button">
                <span className="header-middle__button_icon">
                    <CompareIcon/>
                </span>
                <span className="header-middle__button_text">Solishtirish</span>
            </button>
            <button className="header-middle__button">
                <span className="header-middle__button_icon">
                    <CartIcon/>
                </span>
                <span className="header-middle__button_text">Savatcha</span>
            </button>
            <button className="header-middle__button">
                <span className="header-middle__button_icon">
                    <UserIcon/>
                </span>
                <span className="header-middle__button_text">Kirish</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMiddle;
