var features = document.querySelector(".features");
var company = document.querySelector(".company");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var arrowUp = document.querySelector(".icon-arrowup");
var arrowDown = document.querySelector(".icon-arrowdown");
var up = document.querySelector(".up");
var down = document.querySelector(".down");
var open = document.querySelector(".open");
var close = document.querySelector(".close");
var ule = document.querySelector("ul");


features.addEventListener("click", function () {
  if (one.style.display === "none") {
    one.style.display = "block";
    arrowUp.style.display = "inline-block";
    arrowDown.style.display = "none";
  } else {
    one.style.display = "none";
    arrowUp.style.display = "none";
    arrowDown.style.display = "inline-block";
  }
});

company.addEventListener("click", function () {
  if (two.style.display === "none") {
    two.style.display = "block";
    up.style.display = "inline-block";
    down.style.display = "none";
  } else {
    two.style.display = "none";
    up.style.display = "none";
    down.style.display = "inline-block";
  }
});

open.addEventListener("click", function () {
    if (ule.style.display==="none") {
        ule.style.display = "block";
        close.style.display = "block";
    } else {
        open.style.display= "block";
    }
})