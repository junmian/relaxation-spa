import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";
import React, { useState } from "react";
import toggleBars from "../assets/bars.png";
import toggleClose from "../assets/close.webp";

const AppLogo = styled.img`
  max-width: 200px;
  height: 30px;
  margin-left: 10px;
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <AppLogo src={logo} />
        </Link>
        <ul
          className={isMobile ? "nav-links-mobile" : "navbar-links"}
          onClick={() => setIsMobile(false)}
        >
          <div className="navbar-nav nav-column nav-items">
            <li>
              <Link className="nav-link home home-nav" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link services services-nav" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link products products-nav" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link
                className="nav-link book-appointment book-appointment-nav"
                to="/bookAppointment"
              >
                Book Appointment
              </Link>
            </li>
          </div>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <img className="toggleClose" src={toggleClose} alt="close" />
          ) : (
            <img className="toggleBars" src={toggleBars} alt="bars" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
