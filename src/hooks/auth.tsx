import { createContext } from "react";

export const AuthContext = createContext([]);

function AutoProvider({ children }) {
  return <AuthContext.Provider value={[]}>{children}</AuthContext.Provider>;
}
