'use strict'

var jumboElement = document.getElementById("jumbo");

// setTimeout(function() {
//   var navEl = document.getElementById("navbar");
//   navEl.classList.add("blackbackground");
// }, 3000);


function toggleNavBackgroundColor() {
    var navElement = document.getElementsByTagName("nav")[0];
    alert(navElement.style.backgroundColor);
    if (navElement.style.backgroundColor !== "black")
    {
      navElement.style.backgroundColor == "transparent";
    }
    else {
      navElement.style.backgroundColor == "black";
    }
}

function autoScrollOnTimer() {
  // wip
}