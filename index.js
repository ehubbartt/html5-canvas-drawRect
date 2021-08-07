"use strict";
import { setMousePosition } from "./functions/mouse-position.js";
import { positionSelection } from "./functions/create-rect.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("example-canvas");
  const ctx = canvas.getContext("2d");

  const options = {
    color: "red",
    lineWidth: 2,
  };

  canvas.addEventListener("mousemove", (e) => {
    setMousePosition(e, canvas);
  });
  canvas.addEventListener("mousedown", () => {
    positionSelection(ctx, options);
  });
});
