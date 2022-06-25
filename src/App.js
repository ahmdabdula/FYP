import React, { Component, useRef } from "react";
import "./App.css";
import YOLO from "./YOLO";
import Navigation from "./components/Navigation/Navbar";
import AdsPopup from "./components/Advertisement/AdsPopup";
import { useEffect, useState } from "react";
import AppCanvas from "./components/ARTRYON/ArGlasses/ARGlasses";
import ARTryOn from "./components/ARTRYON/ARTryon";
import ARjs from "./components/ARTRYON/ArJS/ArJs";
import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";

function App() {
  const [AdPop, SetAdpop] = useState(false);
  const [AdObject, SetAdobject] = useState("");
  const [AROn, SetARon] = useState(null);

  function home() {
    SetAdpop(false);
    SetAdobject("");
    SetARon(null);
  }

  function Box() {
    return (
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
    );
  }

  return (
    <div>
      {AROn && <ARTryOn AdObject={AdObject} category={AROn} />}
      <Navigation
        AdObject={AdObject}
        SetAdobject={SetAdobject}
        SetAdpop={SetAdpop}
        home={home}
      />
      {!AROn && (
        <YOLO setAdpop={SetAdpop} SetAdobject={SetAdobject} AdPop={AdPop} />
      )}
      {AdPop && !AROn && <AdsPopup AdObject={AdObject} SetARon={SetARon} />}
      {/* <ARCanvas
        gl={{
          antialias: false,
          powerPreference: "default",
          physicallyCorrectLights: true,
        }}
        onCameraStreamReady={() => console.log("Camera stream ready")}
        onCameraStreamError={() => console.error("Camera stream error")}
        onCreated={({ gl }) => {
          gl.setSize(window.innerWidth, window.innerHeight);
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 0]} intensity={10.0} />
        <ARMarker
          params={{ smooth: true }}
          type={"pattern"}
          patternUrl={"/data/patt.hiro"}
          onMarkerFound={() => {
            console.log("Marker Found");
          }}
        >
          <Box />
        </ARMarker>
      </ARCanvas> */}
    </div>
  );
}

export default App;
