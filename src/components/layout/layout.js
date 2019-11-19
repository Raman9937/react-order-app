import React from "react";

const layout = ({ children }) => {
  return (
    <div
      style={{
        background: "#444",
        padding: "2rem",
        height: "100vh"
      }}
    >
      <main>{children}</main>
    </div>
  );
};

export default layout;
