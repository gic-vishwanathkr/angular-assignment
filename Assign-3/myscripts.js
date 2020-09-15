var cars = ["BMW", "Ferrari", "Audi", "Jaguar", "Mercedes"];
var carCounter = [0, 0, 0, 0, 0];

function clickCarCounter(countIndex) {
  document.getElementById("carName").innerHTML = "Car Name: "+cars[countIndex];
  document.getElementById("clickCount").innerHTML = ++carCounter[countIndex];
}
