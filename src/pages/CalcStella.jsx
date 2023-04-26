import React from "react";

export const CalcStella = () => {
  return (
    <div className="container-stella">
      <div className="calculator-stella dark">
        <div className="theme-toggler active">
          <i className="toggler-icon"></i>
        </div>
        <div className="display-screen">
          <div id="display"></div>
        </div>
        <div className="buttons-stella">
          <table>
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
                <button className="btn-stella btn-operator-stella" id="backspace">
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
          </table>
        </div>
      </div>
    </div>
  );
};
