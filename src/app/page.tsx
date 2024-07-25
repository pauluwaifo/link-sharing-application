"use client";

import React from "react";
import SideContent from "./components/pages.components/side_content";
import HomeComp from "./components/pages.components/home.components/Home";
import AuthContext, { AuthContextType } from "./context/AuthContext";
import { useContext } from "react";

// login page
const Home = () => {
  const { isAuth } = useContext(AuthContext) as AuthContextType;
  
  return (
    <>
      {isAuth && (
        <div className="flex flex-row justify-center w-full ">
          <SideContent />
          <HomeComp />
        </div>
      )}
    </>
  );
};

export default Home;
