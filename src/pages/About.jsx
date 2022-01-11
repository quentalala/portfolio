import React from "react";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <>
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            xl={6}
            display={"flex"}
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "3rem",
              }}
            >
              <div style={{ height: "600px", width: "max-content" }}>
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
            sm={12}
            md={6}
            xl={6}
            display={"flex"}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <div
              style={{
                margin: "3rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid lightgray",
                  height: "600px",
                  width: "420px",
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
