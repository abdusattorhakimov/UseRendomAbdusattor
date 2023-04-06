import { createContext, useReducer } from "react";
function chengContextValue(state, action) {
  switch (action.type) {
    case "CHANGE__COLOR":
      return { ...state, color: action.payload };
    case "CHANGE__MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}

const ThemeContext = createContext();
function Usecontextprovider({ children }) {
  const [state, dispatch] = useReducer(chengContextValue, {
    mode: "light",
  });

  function changeMode(mode) {
    dispatch({ type: "CHANGE__MODE", payload: mode });
  }
  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { Usecontextprovider, ThemeContext };
