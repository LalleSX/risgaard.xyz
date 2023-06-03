function addToDisplay(value) {
  var result = document.getElementById("result");
  result.innerHTML += value;
}

function calculate() {
  var result = document.getElementById("result");
  result.innerHTML = eval(result.innerHTML);
}

function clearDisplay() {
  var result = document.getElementById("result");
  result.innerHTML = "";
}
