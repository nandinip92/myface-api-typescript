import React from "react";
import { Nav } from "./nav";
import "./styles.scss";

export const Header: React.FC = () => {
  return (
    <header className="myFaceHeader">
      {/* <h1>MyFace</h1> */}
      <Nav />
    </header>
  );
};
