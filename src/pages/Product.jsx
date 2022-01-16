import React from "react";

const Product = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "2rem" }}>Product Page</div>
        <div style={{ margin: "2rem" }}>Explain your project</div>
        <div style={{ margin: "2rem" }}>Goals</div>
        <div style={{ margin: "2rem" }}>Challenges</div>
        <div style={{ margin: "2rem" }}>Users</div>
        <div style={{ margin: "2rem" }}>Features</div>
      </div>
    </div>
  );
};

export default Product;
