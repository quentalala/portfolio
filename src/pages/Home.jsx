import React from "react";
import { Grid } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            xl={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                margin: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1>Hey, I'm Quentin</h1>
              <h2>Thanks for visiting my portfolio!</h2>
            </div>
          </Grid>
        </Grid>
        <div
          className="projects-wrap"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "6rem",
          }}
        >
          <Grid container spacing={5} justifyContent={"center"}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              xl={6}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div className="project-container">
                <div className="project-img-wrap">
                  <img
                    src={process.env.PUBLIC_URL + "/images/ifihadone.jpg"}
                    alt=""
                  />
                  <div className="overlay overlaid"></div>
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
              <div className="project-container">
                <div className="project-img-wrap">
                  <img
                    src={process.env.PUBLIC_URL + "/images/ifihadone.jpg"}
                    alt=""
                  />
                  <div className="overlay overlaid"></div>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              xl={6}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div className="project-container">
                <div className="project-img-wrap">
                  <img
                    src={process.env.PUBLIC_URL + "/images/ifihadone.jpg"}
                    alt=""
                  />
                  <div className="overlay overlaid"></div>
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
              <div className="project-container">
                <div className="project-img-wrap">
                  <img
                    src={process.env.PUBLIC_URL + "/images/ifihadone.jpg"}
                    alt=""
                  />
                  <div className="overlay overlaid"></div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
