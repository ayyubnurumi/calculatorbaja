import React from "react";
import Calculator from "./pages/Calculator";
import Calculator1 from "./pages/Calculator1";
import { CalcStella } from "./pages/CalcStella";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <CalcStella />
      <hr className="text-light" />
      <Calculator />
      <hr className="text-light" />
      <Calculator1 />
    </>
  );
};

export default App;
