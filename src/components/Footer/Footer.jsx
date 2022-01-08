import React from "react";
import "../../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>Made by quentalala</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            margin: "1rem ",
          }}
        >
          <li className="socials">
            <i className="fab fa-linkedin-in"></i>
          </li>
          <li className="socials">
            <i className="fab fa-github"></i>
          </li>
          <li className="socials">
            <i className="far fa-thumbs-up"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
