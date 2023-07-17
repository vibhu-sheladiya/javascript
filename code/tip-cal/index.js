
 function updateTipPercentage() {
    const tipPercentage = document.getElementById("tipPercentage").value;
    document.getElementById("tipPercentageValue").textContent = tipPercentage + "%";
  }
  updateTipPercentage();

  function updateNumPeople() {
    const numPeople = document.getElementById("numPeople").value;
    document.getElementById("numPeopleValue").textContent = numPeople;
  }
  updateNumPeople();

  function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const numPeople = parseInt(document.getElementById("numPeople").value);

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalBill = billAmount + tipAmount;
    const totalPerPerson = totalBill / numPeople;

    document.getElementById("tipAmount").textContent = "$" + tipAmount.toFixed(2);
    document.getElementById("totalPerPerson").textContent = "$" + totalPerPerson.toFixed(2);
  }