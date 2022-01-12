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
            <div
              className="header-left"
              style={{
                margin: "3rem 0.5rem 3rem 3rem",
                widht: "1rem",
                height: "1rem",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/smiley.png"}
                alt="logo"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}
              />
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
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#1e1e1f" }}
              >
                <div className="nav-item">Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
