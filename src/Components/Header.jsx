import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../Assets/pokeball-pokemon-svgrepo-com.svg";
import Search from "./Search/Search.component";

import "./Header.css";

export const Header = ({ searchHandleOnChange }) => {
  // const naviLinkCss =
  // "mx-3 text-purple-100 hover:bg-white hover:text-purple-500 h-full inline-block";

  return (
    <div className="w-full bg-white h-20">
      <div className="mx-auto h-full bg-white" id="header">
        <div className="h-full flex items-center bg-coolDarkGray">
          <Link className="w-8 ml-6 mr-2" to="/">
            <Logo className="logo" />
          </Link>
          <div className="flex-grow h-full flex items-stretch">
            <NaviItem path="/" text="Home" />
            <NaviItem path="/pokemon" text="Pokemons" />
            <NaviItem path="/moves" text="Moves" />
            <NaviItem path="/items" text="Items" />
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
};

const NaviItem = ({ path, text }) => (
  <div className="flex items-center px-1 mx-3 text-purple-100 hover:bg-white hover:text-purple-500">
    <Link to={path}>{text}</Link>
  </div>
);

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
