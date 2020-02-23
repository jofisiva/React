import ReactDOM from "react-dom";
import One from "./One";
import React from "react";

function Test() {
  return <One name1={"Test"} />;
}
ReactDOM.render(<Test />, document.getElementById("root"));
