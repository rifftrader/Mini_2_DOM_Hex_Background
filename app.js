//jshint esversion:6

//SETTING UP OF DOM SELECTOR CONSTANTS
const button = document.querySelector("button");
const background = document.querySelector(".container-fluid");
const text = document.querySelector("h3");

//CLICK BUTTON EVENT LISTENER
button.addEventListener("click", colourSelection);

//FUNCTION - generate random 6 digit hexcode; change background colour and H3 inner text.
function colourSelection() {

  let hexcode = "#";

  for (let i = 0; i < 6; i++) {
    hexcode += Math.round(Math.random() * 15).toString(16);
  }

  background.style.backgroundColor = hexcode;
  text.innerHTML = hexcode;

}
