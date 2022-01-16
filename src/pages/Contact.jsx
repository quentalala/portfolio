import React, { useState, useRef } from "react";
import { Grid } from "@mui/material";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// Result component temporarily shows up after contact email has been sent
const Result = () => {
  return (
    <div
      style={{
        margin: "1rem 0 1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Message has been sent, I will contact you once I have read your message
        :)
      </p>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        The notification above will disappear in 30 seconds!
      </p>
    </div>
  );
};

const Contact = () => {
  const [result, setResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_n4iqw7u",
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setResult(true);
  };

  //   Email sent notification disappears after 30 seconds
  setTimeout(() => {
    setResult(false);
  }, 30000);

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ margin: "3rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Get in touch
              </h1>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#808080",
                }}
              >
                Feel free to hit me up, if you have any questions!
              </h2>
            </div>
            <form ref={form} action="" onSubmit={sendEmail}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  style={{
                    width: "auto",
                    margin: "1rem 0 1rem",
                    padding: "1rem",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    border: "none",
                    borderRadius: "5px",
                  }}
                />
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="Email"
                  style={{
                    width: "auto",
                    margin: "1rem 0 1rem",
                    padding: "1rem",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    border: "none",
                    borderRadius: "5px",
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  style={{
                    width: "auto",
                    margin: "1rem 0 1rem",
                    padding: "1rem",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    border: "none",
                    fontFamily: "Source Sans Pro, sans-serif",
                    borderRadius: "5px",
                  }}
                ></textarea>
                <button
                  className="email-btn"
                  style={{
                    width: "auto",
                    margin: "1rem 0 1rem",
                    padding: "1rem",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Send Email
                </button>
                <div>{result && <Result />}</div>
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
