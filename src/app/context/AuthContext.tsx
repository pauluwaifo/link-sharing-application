
import { createContext } from 'react';

// Define the shape of the context value
export interface AuthContextType {
  loading?: boolean;
  user?: string[]
}

// Create the context with default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;