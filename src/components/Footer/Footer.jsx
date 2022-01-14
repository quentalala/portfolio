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
            <a
              href="https://www.linkedin.com/in/quentin-chin"
              style={{ color: "#1e1e1f" }}
            >
              <div className="fab fa-linkedin-in"></div>
            </a>
          </li>
          <li className="socials">
            <a
              href="https://github.com/quentalala"
              style={{ color: "#1e1e1f" }}
            >
              <div className="fab fa-github"></div>
            </a>
          </li>
          <li className="socials">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              style={{ color: "#1e1e1f" }}
            >
              <div className="far fa-thumbs-up"></div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
