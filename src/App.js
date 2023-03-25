import React from "react";
import ContextProvider from "./components/Contexts/MainContext";
import Main from "./components/Main/Main";
const App = () => {
  return (

    <ContextProvider>
      <Main />
    </ContextProvider>
  );
};

export default App;
