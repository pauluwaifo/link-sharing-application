import React from "react";
import SideContent from "./components/pages.components/home.components/side_content";
import MainContent from "./components/pages.components/home.components/main/main_content";

// login page
const Home = () => {
  return (
    <div className="flex flex-row justify-center w-full ">
      <SideContent />
      <MainContent />
    </div>
  );
};

export default Home;
