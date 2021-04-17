import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../Assets/pokeball-pokemon-svgrepo-com.svg";

import "./Header.css";

export const Header = () => {
  return (
    <div className="header" id="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="top_navi_container">
        <Link className="navi-item" to="/">
          Home
        </Link>
        <Link className="navi-item" to="/pokemon">
          List
        </Link>
        <Link className="navi-item" to="/moves">
          Moves
        </Link>
        <Link className="navi-item" to="/items">
          Items
        </Link>
      </div>
    </div>
  );
};

export const SideNav = () => {
  return (
    <div className="side-navi">
      <a href="#header">Back to Top</a>
      <a href="#pm1">Gen 1</a>
      <a href="#pm152">Gen 2</a>
      <a href="#pm252">Gen 3</a>
      <a href="#pm387">Gen 4</a>
      <a href="#pm495">Gen 5</a>
      <a href="#pm650">Gen 6</a>
      <a href="#pm722">Gen 7</a>
      <a href="#pm810">Gen 8</a>
    </div>
  );
};

