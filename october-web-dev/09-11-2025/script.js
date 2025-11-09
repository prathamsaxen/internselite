let value = 0;
let clicks = 0;
let actionTriggered = "None";
let plusButton = document.getElementById("plus-btn");
let minusButton = document.getElementById("minus-btn");
let valueElement = document.getElementsByClassName("valueData");
let extractedElement = valueElement[0];
let resetButton = document.getElementById("reset-btn");
let clickElement = document.getElementById("click-status");
let actionStatus = document.getElementById("action-status");

console.log(actionTriggered);
const updateValue = () => {
  extractedElement.innerHTML = value;
  clickElement.innerHTML = clicks;
  actionStatus.innerHTML = actionTriggered;
};

updateValue();

resetButton.addEventListener("click", () => {
  value = 0;
  clicks = 0;
  actionTriggered = "None";
  updateValue();
});

plusButton.addEventListener("click", () => {
  value++;
  clicks++;
  actionTriggered = "Add";
  updateValue();
});

minusButton.addEventListener("click", () => {
  value--;
  clicks++;
  actionTriggered = "Minus";
  updateValue();
});
