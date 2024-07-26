"use client"


import { createContext } from "react";
import { UserType } from "./AuthProvider";

// Define the shape of the context value
export interface AuthContextType {
  loading?: boolean;
  isAuth?: boolean;
  user: UserType | null;
  userInfo: any;
}

// Create the context with default value
const AuthContext = createContext<AuthContextType>({
  loading: true,
  user: null,
  isAuth: false,
  userInfo: [],
});

export default AuthContext;
