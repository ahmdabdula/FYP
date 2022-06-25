import React, { Component } from "react";
import Camera from "./components/Camera/Camera";
import YoloResult from "./components/YoloResult/YoloResult";
import { Webcam } from "./webcam";
import * as tf from "@tensorflow/tfjs";
import yolo, { downloadModel } from "tfjs-yolo-tiny";
import "./App.css";
import { useState, useEffect } from "react";
let model;
let webcam;
let webcamElem;

function YOLO(props) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    async function start() {
      try {
        model = await downloadModel();
        webcam = new Webcam(document.getElementById("webcam"));
        webcamElem = document.getElementById("webcam-wrapper");
        await webcam.setup();
        run();
      } catch (e) {
        console.error(e);
      }
    }
    start();
  }, []);

  async function run() {
    while (true) {
      clearRects();
      const inputImage = webcam.capture();
      const t0 = performance.now();
      const boxes = await yolo(inputImage, model);

      const t1 = performance.now();
      //   console.log("YOLO inference took " + (t1 - t0) + " milliseconds.");

      let yoloResult = "";
      let Array = [];
      setResult([]);
      boxes.forEach((box) => {
        const { top, left, bottom, right, classProb, className } = box;
        Array.push({ top, left, bottom, right, classProb, className });
        yoloResult =
          yoloResult +
          `${className} Confidence: ${Math.round(classProb * 100)}%` +
          "\n";
        drawRect(
          left,
          top,
          right - left,
          bottom - top,
          `${className} Confidence: ${Math.round(classProb * 100)}%`
        );
      });
      setResult(Array);
      await tf.nextFrame();
    }
  }

  function clearRects() {
    const rects = document.getElementsByClassName("rect");
    while (rects[0]) {
      rects[0].parentNode.removeChild(rects[0]);
    }
  }

  function drawRect(x, y, w, h, text = "", color = "red") {
    const rect = document.createElement("div");
    rect.classList.add("rect");
    rect.style.cssText = `top: ${y}px; left: ${x}px; width: ${w}px; height: ${h}px; border-color: ${color};`;
    const label = document.createElement("div");
    label.classList.add("label");
    label.innerText = text;
    rect.appendChild(label);
    webcamElem.appendChild(rect);
  }

  return (
    <div className="App">
      <Camera />
      <YoloResult
        SetAdpop={props.setAdpop}
        SetAdobject={props.SetAdobject}
        AdPop={props.AdPop}
        result={result}
      />
    </div>
  );
}

export default YOLO;
