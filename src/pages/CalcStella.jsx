import React, { useState } from "react";

export const CalcStella = () => {
  const [digits, setDigits] = useState("");
  const buttons = document.querySelectorAll(".btn-stella");
  buttons.forEach((item) => {
    item.onclick = () => {
      if (item.id == "clear") {
        setDigits("");
      } else if (item.id == "backspace") {
        setDigits(digits.substring(0, digits.length - 1));
      } else if (digits != "" && item.id == "equal") {
        setDigits(eval(digits)); // there is no error handler
      } else if (digits === "" && item.id == "equal") {
        setDigits("empty!");
        setTimeout(() => setDigits(""), 2000);
      } else {
        setDigits(digits + item.id);
      }
    };
  });

  const [themeIsDark, setThemeIsDark] = useState(true);
  const handleTheme = () => {
    setThemeIsDark(!themeIsDark);
  };

  return (
    <div className="container-stella" id="calculator-1">
      <div className={`calculator-stella ${themeIsDark ? "dark" : ""}`}>
        <div className="theme-toggler" onClick={handleTheme}>
          <i className="toggler-icon"></i>
        </div>
        <div className="display-screen">
          <div id="display">{digits}</div>
        </div>
        <div className="buttons-stella">
          <table>
            <tbody>
              <tr>
                <td>
                  <button className="btn-stella btn-operator-stella" id="clear">
                    C
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-operator-stella" id="/">
                    :
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-operator-stella" id="*">
                    x
                  </button>
                </td>
                <td>
                  <button
                    className="btn-stella btn-operator-stella"
                    id="backspace"
                  >
                    {"<"}
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-stella btn-number-stella" id="7">
                    7
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-number-stella" id="8">
                    8
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-number-stella" id="9">
                    9
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-operator-stella" id="-">
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-stella btn-number-stella" id="4">
                    4
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-number-stella" id="5">
                    5
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-number-stella" id="6">
                    6
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-operator-stella" id="+">
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-stella btn-number-stella" id="1">
                    1
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-number-stella" id="2">
                    2
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-number-stella" id="3">
                    3
                  </button>
                </td>
                <td rowSpan={2}>
                  <button className="btn-stella btn-equal-stella" id="equal">
                    =
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-stella btn-operator-stella" id="(">
                    {"("}
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-number-stella" id="0">
                    0
                  </button>
                </td>
                <td>
                  <button className="btn-stella btn-operator-stella" id=")">
                    {")"}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
