import React from "react";

function LanguageSelect() {
  return (
    <div className="header-language language-header">
      <div className="language-row">
        <label htmlFor="uz" className="language-label">
          UZ
        </label>
        <input className="language-input" type="radio" id="uz" name="language" />
      </div>
      <div className="language-row">
        <label htmlFor="ru" className="language-label">
          RU
        </label>
        <input type="radio" id="ru" className="language-input" name="language" />
      </div>
    </div>
  );
}

export default LanguageSelect;
