"use strict";
/*Remove no-js class*/
var body = document.querySelector("body");
body.classList.remove("no-js");

var toggle = document.getElementById("nav-toggle"); //Navigation Toggle

window.onresize = navToggle;

function navToggle() {
  if (window.innerWidth > 968) {
    toggle.checked = false;
  }
}
