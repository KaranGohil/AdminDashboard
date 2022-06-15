import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// Always return children
// why?
// When you wrap a component or page with context provider children would be the content of the
//component/page which needs to be display
// We use ContextProvider to provide context to all the any component globally
// This needs to be wrapped around index.js
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};

// export the context to the all component/pages
export const useStateContext = () => useContext(StateContext);
