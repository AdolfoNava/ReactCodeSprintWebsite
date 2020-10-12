import React from "react";
import "../components/header.css";
import { Link } from "react-router-dom";
import SearchBox from "./search-function";

function Header() {
  return (
    <header className="header">
      <span className="header__logo" role="img" aria-label="Logo">
        Welcome
      </span>
      <nav className="header__nav">
        <Link to="/" className="header-link">Home</Link> 
      </nav>
      <SearchBox className="search-bar" placeholder="Enter term name here" handleChange={(event)=> this.useState({searchField:event.target.value})}/>
    </header>
  );
}
export default Header;
