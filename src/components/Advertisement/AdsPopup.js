import React from "react";
import "./AdsPopup.css";
import AdUnit from "./AdUnit";
import AdsData from "./AdsData";

function AdsPopup(props) {
  console.log(props);
  return (
    <div class="Popup-Bar">
      {AdsData[props.AdObject] &&
        AdsData[props.AdObject].map((Ad) => {
          return (
            <AdUnit
              Category={props.AdObject}
              Ad={Ad}
              SetARon={props.SetARon}
              setGlasses={props.setGlasses}
            />
          );
        })}
    </div>
  );
}

export default AdsPopup;
