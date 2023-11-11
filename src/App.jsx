import { useState, createContext, useEffect, useContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export const MyContext = createContext();

function MyProvider({ children }) {
  const [day, setDay] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("day");
  }, [day]);
  //  const updateValue = (newValue) => {
  //   setValue(newValue);
  // };

  return (
    <MyContext.Provider value={{ day, setDay }}>{children}</MyContext.Provider>
  );
}

function App() {
  return (
    <MyProvider>
      <Header />
      <Main />
      <p className="lastPart">Drag and drop to reorder list</p>
    </MyProvider>
  );
}

export default App;
