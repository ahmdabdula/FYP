import React from "react";
function YoloResult(props) {
  // console.log(result);
  // console.log(props);
  return (
    <div className="center" style={{ position: "absolute", zIndex: "100" }}>
      {props.result.map((box) => {
        return (
          <div
            style={{
              position: "relative",
              top: box.top,
              left: box.left,
              right: box.right,
            }}
          >
            <button
              onClick={() => {
                props.SetAdpop(!props.AdPop);
                props.SetAdobject(box.className);
              }}
              type="button"
              class="btn btn-warning btn-lg"
            >
              {box.className}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default YoloResult;
