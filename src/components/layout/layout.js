import React from "react";
import Nav from "../nav/nav";
const layout = ({ children }) => {
  return (
    <div
      style={{
        background: "#444",
        padding: "2rem",
        height: "100vh"
      }}
    >
      <Nav />
      <main style={{ marginTop: "4rem" }}>{children}</main>
    </div>
  );
};

export default layout;
