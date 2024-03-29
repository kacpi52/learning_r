import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DropDown.scss";

const DropDown = ({ title, showLoginPanel }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const DropMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const ToggleBoth = () => {
    DropMenu();
    showLoginPanel();
  };
  return (
    <div className="menuElem">
      <span onClick={DropMenu}> {toggleMenu ? "CLOSE" : title} </span>
      <div
        className={
          toggleMenu ? "menuElem__sidebar" : "menuElem__sidebar--hidden"
        }
      >
        <ul>
          <li>
            <Link to="/" onClick={DropMenu} className="homePageLink">
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/ShopPage" onClick={DropMenu} className="homePageLink">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/UserPage" onClick={DropMenu} className="homePageLink">
              User Page
            </Link>
          </li>
          <li onClick={ToggleBoth}>User Panel </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
