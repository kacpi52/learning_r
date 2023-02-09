import React from "react";
import { Menu, TopListLayout } from "../Components/index";

const HomePage = () => {
  return (
    <div>
      <Menu />
      <h1>Home Page</h1>
      <p>Main page of this website.</p>
      <TopListLayout />
    </div>
  );
};

export default HomePage;
