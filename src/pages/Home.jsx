import React from "react";
import { Grid } from "@mui/material";
import "./Home.css";
import { Link } from "react-router-dom";

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
              <h2 style={{ margin: "1rem 0rem 0rem" }}>
                Currently learning about Web Dev and UX
              </h2>
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
              <Link
                to="/product"
                style={{ textDecoration: "none", color: "#1e1e1f" }}
              >
                <div className="project-container">
                  <div className="project-img-wrap">
                    <img
                      src={process.env.PUBLIC_URL + "/images/ifihadone.jpg"}
                      alt=""
                    />
                    <div className="overlay overlaid">
                      <h2 className="overlaid-text">Project 1</h2>
                    </div>
                  </div>
                </div>
              </Link>
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
                  <div className="overlay overlaid">
                    {" "}
                    <h2 className="overlaid-text">Project 2</h2>
                  </div>
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
                  <div className="overlay overlaid">
                    {" "}
                    <h2 className="overlaid-text">Project 3</h2>
                  </div>
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
                  <div className="overlay overlaid">
                    {" "}
                    <h2 className="overlaid-text">Project 4</h2>
                  </div>
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
