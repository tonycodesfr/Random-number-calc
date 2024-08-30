const minimumValue = parseInt(document.querySelector(".min").value);

const maximumValue = parseInt(document.querySelector(".max").value);

const button = document.querySelector("button");

// document.console.log(minimunValue);

function generateRandomNumber(min, max, event) {
  event.preventDefault();
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  document.querySelector(".number").innerHTML = number;
  console.log(event);
}

button.addEventListener("click", function (event) {
  const minimumValue = parseInt(document.querySelector(".min").value);
  const maximumValue = parseInt(document.querySelector(".max").value);
  generateRandomNumber(minimumValue, maximumValue, event);
});
