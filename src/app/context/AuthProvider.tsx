"use client"

import { ReactNode, useState } from "react";
import AuthContext from "./AuthContext";

interface Props {
  children: ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {

  const [loading, setLoading] = useState<boolean>(false)

  return (
    <AuthContext.Provider value={{loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
