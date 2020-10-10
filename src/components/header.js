import React from "react";
import "../components/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <span className="header__logo" role="img" aria-label="Logo">
        Welcome
      </span>
      <nav className="header__nav">
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}
export default Header;
