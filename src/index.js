var lhs = "";
var rhs = "";
var calcOperator = "";
var total = 0;

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const theme = document.querySelectorAll(".theme");
const themeMarker = document.getElementById("themeMarker");
const del = document.querySelector(".delete");
const screen = document.querySelector("#screen");

let chosenTheme = 1;

numbers.forEach(number => {
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

operators.forEach(operator => {
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

   if (parseInt(total) % 2 !== 0) screen.innerText = total.toFixed(2);
   else screen.innerText = total;
});

theme.forEach(theme => {
   theme.addEventListener("click", function (e) {
      clearMarkers();
      themeMarker.children[parseInt(e.target.innerText) - 1].classList.add(
         "bg-key-red-bg-toggle"
      );
      document.body.setAttribute("data-theme", e.target.innerText);
   });
});

del.addEventListener("click", function (e) {
   if (!rhs) {
      calcOperator = "";
      lhs = lhs.slice(0, -1);
      if (!lhs) screen.innerText = 0;
      else screen.innerText = lhs;
      return;
   }
   rhs = rhs.slice(0, -1);
   if (!rhs) screen.innerText = 0;
   else screen.innerText = rhs;
});

function clearMarkers() {
   for (i = 0; i < 3; i++) {
      themeMarker.children[i].classList.remove("bg-key-red-bg-toggle");
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
