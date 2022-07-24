import React from "react";
import "../Header/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">
            <img src="ikea.svg" width={180}></img>
          </a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <section className="navbar">
              <a href="/" className="navbar-item">
                Home
              </a>
              <a href="/" className="navbar-item">
                Categories
              </a>
              <a href="/Categories" className="navbar-item">
                Contact
              </a>
              <a href="/" className="navbar-item">
                Cart
              </a>
            </section>
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom"></section>
      <br></br>
    </section>
  );
}

export default Header;
