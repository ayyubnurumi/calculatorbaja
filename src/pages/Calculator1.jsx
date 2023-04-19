import React from "react";
import { Wrapper } from "../components/Wrapper";
import { Screen } from "../components/Screen";
import { ButtonBox } from "../components/ButtonBox";
import { Button } from "../components/Button";
import { CalcProvider } from "../context/CalcContext";

const Calculator1 = () => {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <>
      <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => {
              return <Button key={i} value={btn} />;
            })}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </>
  );
};

export default Calculator1;
