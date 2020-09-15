var clickCounter = 0;
var clickCounterRight = 0;
function clickImage() {
  document.getElementById("counter").innerHTML = ++clickCounter;
}
function clickImage2() {
  document.getElementById("counter2").innerHTML = ++clickCounterRight;
}

var cars = ["BMW", "Ferrari", "Audi", "Jaguar", "Mercedes"];
var carCounter = [0, 0, 0, 0, 0];

function clickCarCounter(countIndex) {
  document.getElementById("carName").innerHTML = "Car Name: "+cars[countIndex];
  document.getElementById("clickCount").innerHTML = ++carCounter[countIndex];
}
