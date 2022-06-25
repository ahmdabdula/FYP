import React from "react";
import { useEffect } from "react";

function ARjs(props) {
  return (
    <div>
      <a-scene embedded arjs>
        <a-marker preset="hiro">
          <a-entity
            position="0 0 0"
            scale="2 2 2"
            gltf-model="/laptop_alienpredator/scene.gltf"
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default ARjs;
