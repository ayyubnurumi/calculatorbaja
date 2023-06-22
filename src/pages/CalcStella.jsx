import React, { useState } from "react";

export const CalcStella = () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn-stella");
  buttons.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.id == "clear") {
        display.innerText = "";
      } else if (item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substring(0, string.length - 1);
      } else if (display.innerText != "" && item.id == "equal") {
        display.innerText = eval(display.innerText);
      } else if ((display.innerText = "" && item.id == "equal")) {
        display.innerText = "empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else {
        display.innerText += item.id;
      }
    });
  });
  //   const theme = document.getElementsByClassName("dark");
  //   const themeIcon = document.getElementsByClassName("toggler-icon");
  const [themeIsDark, setThemeIsDark] = useState(true);
  const handleTheme = () => {
    setThemeIsDark(!themeIsDark);
  };
  //   const themeToggleBtn = document.getElementsByClassName("theme-toggler");
  //   let isDark = true;
  //   themeToggleBtn.addEventListener("click", () => {
  //     theme.classList.toggle("dark");
  //     themeToggleBtn.classList.toggle("active");
  //     isDark = !isDark;
  //   });
  return (
    <div className="container-stella">
      <div className={`calculator-stella ${themeIsDark ? "dark" : ""}`}>
        <div
          className={`theme-toggler" ${themeIsDark ? "active" : ""}`}
          onClick={handleTheme}
        >
          <i className="toggler-icon"></i>
        </div>
        <div className="display-screen">
          <div id="display"></div>
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
