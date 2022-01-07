import React from "react";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div style={{ margin: "3rem" }}>This is the about page</div> */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            xl={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "3rem",
              }}
            >
              <div style={{ height: "600px", width: "auto" }}>
                <img
                  src={process.env.PUBLIC_URL + "/images/IMG_1006.jpg"}
                  alt="pic here"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    borderRadius: "5%",
                  }}
                />
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            xl={6}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <div style={{ margin: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid lightgray",
                  height: "600px",
                  width: "450px",
                  borderRadius: "5%",
                }}
              >
                <h3>About Me</h3>
                <div>Paragraph goes here</div>
                <div>Another paragraph goes here</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
