// const heading=document.getElementById('heading');
// console.log(heading);
// heading.innerHTML="Error "

// let elements=document.getElementsByClassName('subtitle');
// console.log(elements[2]);

// elements[1].innerHTML="10 Yrs Old"
let value = 0;
let increaseButton = document.getElementById("i-btn");
let decreaseButton = document.getElementById("d-btn");
let valueElement = document.getElementById("value");

const updateUI = (inputNumber) => {
  valueElement.innerHTML = inputNumber;
};
// updateUI();
increaseButton.addEventListener("click", () => {
  value++;
  console.log(value);
  updateUI(value);
});

decreaseButton.addEventListener("click", () => {
  value--;
  console.log(value);
  updateUI(value);
});
