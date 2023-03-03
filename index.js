
document.getElementById("nombre").onmouseover = function() {mouseOver()};
document.getElementById("nombre").onmouseout = function() {mouseOut()};
document.getElementById("fotografía").onmouseover = function() {mouseOver()};
document.getElementById("fotografía").onmouseout = function() {mouseOut()};


function mouseOver() {
  document.getElementById("nombre").style.color = "#FF3333";
  document.getElementById("fotografía").title = "Paula Giraldo";
}
function mouseOut() {
  document.getElementById("nombre").style.color = "#118e34ff";
  document.getElementById("fotografía").title = "";
}


