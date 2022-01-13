import React from "react";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <>
      <div>
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
                  width: "450px",
                  borderRadius: "5%",
                }}
              >
                <h3>About Me</h3>
                <div style={{ margin: "1rem 2rem 1rem" }}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
