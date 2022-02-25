import React from "react";
import Switch from "./Switch";

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social media dashboard</h1>
            <p className="heade-total">Total followers: 23, 004</p>
          </div>
          <Switch />
        </div>
      </div>
    </header>
  );
}

export default Header;
