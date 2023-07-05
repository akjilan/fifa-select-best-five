const nameReciever = (nameId, selectButtonId) => {
  const titleId = document.getElementById(nameId);
  const titleIdText = titleId.innerText;
  titleAdder(titleIdText, selectButtonId);
};

const titleAdder = (titleName, selectButtonId) => {
  // Using childNodes property
  let myPlayers = document.getElementById("playerList");
  const childNodesCount = myPlayers.children.length;
  // Create a new list item element
  const newItem = document.createElement("li");
  // Set the content of the list item
  newItem.textContent = titleName;
  if (childNodesCount < 5) {
    // Append the new item to the ordered list
    myPlayers.appendChild(newItem);
    //disable the selected button
    const buttonId = document.getElementById(selectButtonId);
    buttonId.disabled = true;
  } else {
    alert("You have reached your players limit.");
  }
};

function getValueByInput(inputId) {
  const myInpuId = document.getElementById(inputId);
  myInpuIdValue = myInpuId.value;
  return parseInt(myInpuIdValue);
}
function getValueByText(textId) {
  const myInpuId = document.getElementById(textId);
  myInpuIdInnertext = myInpuId.innerText;
  return parseInt(myInpuIdInnertext);
}

document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    let myPlayers = document.getElementById("playerList");
    const childNodesCount = myPlayers.children.length;
    const perPlayerBudgetId = getValueByInput("perPlayerBudgetId");
    const playerExpenses = childNodesCount * perPlayerBudgetId;
    const playerExpensesDisplay = document.getElementById(
      "playerExpensesDisplay"
    );
    if ((childNodesCount == 0 || isNaN(perPlayerBudgetId) )) {
      alert("Please add a player at least and give expense per player.");
    } else {
      playerExpensesDisplay.innerText = playerExpenses;
    }
  });

document
  .getElementById("calculateTotalButton")
  .addEventListener("click", function () {
    const playerExpense = getValueByText("playerExpensesDisplay");
    const coachExpense = getValueByInput("coachExpense");
    const managerExpense = getValueByInput("managerExpense");
    const totalAmountCost = coachExpense + managerExpense + playerExpense;
    const totalCostid = document.getElementById("totalCost");

    if(isNaN(totalAmountCost)){
      alert('give required inputs.');
    }
    else{

      totalCostid.innerText = totalAmountCost;
    }
  });