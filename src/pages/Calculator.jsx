import React, { useState } from "react";

const Calculator = () => {
  const [val, setVal] = useState("");
  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      console.error(error);
      setVal("");
    }
  };
  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      console.error(error);
      setVal("error");
    }
  };
  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="display-6 fw-bolder text-center text-primary">
            CALCULATOR
          </h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card overflow-hidden p-3 shadow">
            <div className="card-body text-primary p-0">
              <input
                type="text"
                className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow"
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
              <div className="row mt-2 text-center">
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"1"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    1
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"2"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    2
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"3"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    3
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-danger text-light shadow fs-6 fs-lg-4 px-0 overflow-hidden"
                    value={"C"}
                    onClick={() => backspace()}
                  >
                    C/CE
                  </button>
                </div>
              </div>
              <div className="row mt-2 text-center">
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"4"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    4
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"5"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    5
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"6"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    6
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"+"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="row mt-2 text-center">
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"7"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    7
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"8"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    8
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"9"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    9
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"*"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    x
                  </button>
                </div>
              </div>
              <div className="row mt-2 text-center">
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"."}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    .
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"0"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    0
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"="}
                    onClick={() => calculate()}
                  >
                    =
                  </button>
                </div>
                <div className="col-3 px-1">
                  <button
                    style={{ width: "100%", height: "2.5rem" }}
                    className="btn btn-light text-primary shadow"
                    value={"/"}
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    /
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
