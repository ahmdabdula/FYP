import React from "react";
import Webcam from "react-webcam";
const Camera = () => {
  return (
    <div class="center">
      <div style={{ position: "absolute", zIndex: "-1" }} id="webcam-wrapper">
        <video
          autoPlay
          playsInline
          muted
          id="webcam"
          width="416"
          height="416"
        ></video>
      </div>
      <Webcam style={{ position: "fixed", height: "100vh" }} />
    </div>
  );
};

export default Camera;
