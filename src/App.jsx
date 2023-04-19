import React, { useState } from "react";
import Calculator from "./pages/Calculator";
import { Wrapper } from "./components/Wrapper";
import { Screen } from "./components/Screen";

const App = () => {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <>
      <Wrapper>
        <Screen />
        <h1>app</h1>
      </Wrapper>
      <Calculator />
    </>
  );
};

export default App;
