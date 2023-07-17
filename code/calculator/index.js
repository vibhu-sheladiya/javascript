

function WelcomeMessage() {
  var displayValue = document.getElementById("display").value;
  var round = document.getElementById("round");
  if (displayValue === "") {
    round.style.display = "block";
  } else {
    round.style.display = "none";
  }
}

function appendToDisplay(value) {
  document.getElementById("display").value += value;
  WelcomeMessage();
}

function clearDisplay() {
  document.getElementById("display").value = "";
  WelcomeMessage();
}

function calculate() {
  var totalValue = document.getElementById("display").value;
  var result = eval(totalValue);
  document.getElementById("display").value = result;
}

function removeLastCharacter() {
  var displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
  WelcomeMessage();  
}
