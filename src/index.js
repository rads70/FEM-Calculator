var lhs = "";
var rhs = "";
var calcOperator = "";
var total = 0;

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const theme = document.querySelectorAll(".theme");
const themeMarker = document.getElementById("themeMarker");
let chosenTheme = 1;

const screen = document.querySelector("#screen");

numbers.forEach((number) => {
  number.addEventListener("click", function (e) {
    if (calcOperator === "") {
      lhs += e.target.innerText;
      screen.innerText = lhs;
      return;
    }

    rhs += e.target.innerText;
    screen.innerText = rhs;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function (e) {
    calcOperator = e.target.innerText;
    console.log(calcOperator);
  });
});

equals.addEventListener("click", function () {
  switch (calcOperator) {
    case "+":
      total = parseFloat(lhs) + parseFloat(rhs);
      break;
    case "-":
      total = parseFloat(lhs) - parseFloat(rhs);
      break;
    case "/":
      total = parseFloat(lhs) / parseFloat(rhs);
      break;
    case "x":
      total = parseFloat(lhs) * parseFloat(rhs);
      break;
    default:
      break;
  }
  console.log(parseFloat(total) % 2);
  if (parseInt(total) % 2 !== 0) screen.innerText = total.toFixed(2);
  else screen.innerText = total;
});

theme.forEach((theme) => {
  theme.addEventListener("click", function (e) {
    clearMarkers();
    themeMarker.children[parseInt(e.target.innerText) - 1].classList.add(
      "bg-red-500"
    );
    chosenTheme = parseInt(e.target.innerText);
  });
});

function clearMarkers() {
  for (i = 0; i < 3; i++) {
    themeMarker.children[i].classList.remove("bg-red-500");
  }
}

function clearScreen() {
  screen.innerText = "";
}

function reset() {
  lhs = "";
  rhs = "";
  total = 0;
  calcOperator = "";
  screen.innerText = total;
}
