import React, { useState, useRef } from "react";
import { Grid } from "@mui/material";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <div>
      Message has been sent, I will contact you once I have read your message :)
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

  //   Email sent notification disappears after 10 seconds
  setTimeout(() => {
    setResult(false);
  }, 10000);

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
                  }}
                ></textarea>
              </div>
              <button>Submit</button>
              <div>{result && <Result />}</div>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
