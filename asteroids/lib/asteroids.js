console.log("This sucks!");

const MovingObject = require("./moving_objects.js");

document.addEventListener("DOMContentLoaded", function(){
  window.MovingObject = MovingObject;
  const canvasEl = document.getElementById("game-canvas");
  console.log(canvasEl);
  const ctx = canvasEl.getContext("2d");
  window.context = ctx;
});
