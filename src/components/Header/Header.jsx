import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div
          className="header-wrap"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#1e1e1f" }}>
            <div className="header-left" style={{ margin: "1rem" }}>
              Logo
            </div>
          </Link>
          <div className="header-right">
            <div className="nav-wrap" style={{ display: "flex" }}>
              <Link to="/" style={{ textDecoration: "none", color: "#1e1e1f" }}>
                <div className="nav-item">Projects</div>
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#1e1e1f" }}
              >
                <div className="nav-item">About</div>
              </Link>
              <div className="nav-item">Resume</div>
              <div className="nav-item">Contact</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
