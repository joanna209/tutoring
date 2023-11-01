import { createContext, useState } from "react";

// creating context
const AuthContext = createContext({
  token: "",
  setToken: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  // NOTE: we define provider here instead of in app.js
  // to prevent all components in App.js from rerendering
  // everytime the value of token changes
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };