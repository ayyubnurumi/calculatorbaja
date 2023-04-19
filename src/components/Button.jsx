import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

export const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  // user click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  // user click C
  const clearClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  // user click numbers
  const handleClickButton = () => {
    const numberString = value.toString();
    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }
    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  // user click operations
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // user click equals
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({ res: math(calc.res, calc.num, calc.sign), sign: "", num: 0 });
    }
  };

  // user click persen
  const persenClick = () => {
    setCalc({
        num: (calc.num / 100),
        res: (calc.res / 100), sign: ''
    })
  };

  // user click invert (+-) button
  const invertClick = () => {
    setCalc({
        num: calc.num ? calc.num * -1 : 0,
        res: calc.res ? calc.res * -1 : 0, sign: ''
    })
  }

  const getStyleName = (value) => {
    const className = {
      "=": "equals",
      x: "opt",
      "-": "opt",
      "+": "opt",
      "/": "opt",
    };
    return className[value];
  };

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: clearClick,
      "/": signClick,
      x: signClick,
      "+": signClick,
      "-": signClick,
      "=": equalsClick,
      "%": persenClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};
