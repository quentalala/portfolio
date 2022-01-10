import React, { useState, useRef } from "react";
import { Grid } from "@mui/material";
import emailjs from "@emailjs/browser";

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
    // e.target.reset;
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 10000);

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <h1>Contact</h1>
            <form ref={form} action="" onSubmit={sendEmail}>
              <div>
                <h3>Name</h3>
                <input type="text" name="name" required />
              </div>
              <div>
                <h3>Number</h3>
                <input type="text" name="phone" required />
              </div>
              <div>
                <h3>Email</h3>
                <input type="text" name="email" required />
              </div>
              <div>
                <h3>Message</h3>
                <textarea name="message"></textarea>
              </div>
              <button>Submit</button>
              <div>
                {result && (
                  <div>Message has been sent, I will contact you soon</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
