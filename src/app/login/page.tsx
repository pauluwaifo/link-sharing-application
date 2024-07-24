import React from "react";
import LoginComponent from "../components/pages.components/login";

// login page
const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <LoginComponent />
    </div>
  );
};

export default Login;
