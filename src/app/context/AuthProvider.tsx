"use client";

import { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "./AuthContext";
import { auth } from "../firebase/clientApp";
import { User as FirebaseUser } from "firebase/auth";

interface Props {
  children: ReactNode;
}

export interface UserType {
  email: string;
  uid: string;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [user, setUser] = useState<UserType | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          const currentUser: UserType = {
            email: firebaseUser.email || "",
            uid: firebaseUser.uid,
          };
          setUser(currentUser);
          setIsAuth(true);
        } else {
          setUser(null);
          router.push("/login");
        }
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
