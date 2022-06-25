import React from "react";
import { AppCanvas } from "./ArGlasses/ARGlasses";
import ARjs from "./ArJS/ArJs";

function ArTryOn(props) {
  if (props) {
    if (props.category == 1) {
      return (
        <div>
          {props.category == 1 ? (
            <AppCanvas AdObject={props.AdObject} />
          ) : (
            <ARjs />
          )}
        </div>
      );
    } else {
      console.log(document.getElementById("ARJS"));
      return <div></div>;
    }
  }
}

export default ArTryOn;
