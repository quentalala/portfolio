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
        <div>
          <div style={{ margin: "3rem" }}>This is the homepage</div>
        </div>
        <div className="projects-wrap">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6} xl={6}>
              <div className="project-container">Project</div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={6}>
              <div className="project-container">Project</div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={6}>
              <div className="project-container">Project</div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={6}>
              <div className="project-container">Project</div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
