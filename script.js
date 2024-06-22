"use strict";

// Create random Color

const randomColor = function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

document.querySelector(".change").addEventListener("click", function () {
  document.querySelector(".square").style.backgroundColor = randomColor();
});
