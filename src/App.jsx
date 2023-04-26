import React from "react";
import Calculator from "./pages/Calculator";
import Calculator1 from "./pages/Calculator1";
import { CalcStella } from "./pages/CalcStella";


const App = () => {
  return (
    <>
    <CalcStella />
      <Calculator />
      <hr className="text-light"/>
      <Calculator1 />
    </>
  );
};

export default App;
