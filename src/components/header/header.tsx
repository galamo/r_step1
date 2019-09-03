import React, { CSSProperties } from "react";

export default function Header() {
  const css: CSSProperties = { textAlign: "center" };
  const style = { style: { ...css } };
  return (
    <h1 className="jumbotron" {...style}>
      {" "}
      Countries Application{" "}
    </h1>
  );
}
