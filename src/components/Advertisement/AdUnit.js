import React from "react";
import "./AdUnit.css";
import { set_glassesModel } from "../ARTRYON/ArGlasses/ARGlasses";

const unitStyle = {
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  height: "300px",
  width: "250px",
  backgroundColor: "rgb(0,0,0,.4)",
  margin: "10px",
  color: "white",
  border: "2px solid black",
};

const imageStyle = {
  height: "150px",
};

function SetCategory(Category) {
  if (Category == "glasses") {
  }
}

function AdUnit(props) {
  return (
    <div style={unitStyle}>
      <div
        onClick={() => {
          if (props.SetARon) {
            if (props.Category == "glasses") {
              props.SetARon(1);
            } else {
              window.location.replace(props.Ad.host);
            }
          } else {
            document.getElementById(props.Ad.model).click();
          }
        }}
        style={{ backgroundColor: "white", width: "100%" }}
      >
        <img style={imageStyle} src={props.Ad.image}></img>
      </div>
      <h5>{props.Ad.name}</h5>
      <h5>{props.Ad.price}</h5>
      <button
        onClick={() => {
          window.location.replace(props.Ad.link);
        }}
        type="button"
        class="btn btn-warning btn-lg"
      >
        buy now
      </button>
    </div>
  );
}

export default AdUnit;
