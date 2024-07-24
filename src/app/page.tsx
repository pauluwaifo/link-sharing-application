import React from "react";
import SideContent from "./components/pages.components/side_content";
import HomeComp from "./components/pages.components/home.components/Home";

// login page
const Home = () => {
  return (
    <div className="flex flex-row justify-center w-full ">
      <SideContent />
      <HomeComp />
    </div>
  );
};

export default Home;
