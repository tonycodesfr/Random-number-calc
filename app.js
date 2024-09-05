const minimumValue = parseInt(document.querySelector(".min").value);

const maximumValue = parseInt(document.querySelector(".max").value);

const number = document.querySelector(".number").innerHTML;

const button = document.querySelector("button");

//console.log(minimunValue);

function generateRandomNumber(min, max, event) {
  /*
  - Not allow a user to enter a minimum value < 0 
- Not allow a user to enter a maximum value that is less than the minimum value*/

  event.preventDefault();
  if (minimumValue > 0) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    number.innerHTML = randomNumber;
    // console.log(event);
  } else {
    alert("Minimum value should be greater than 0");
  }
}

button.addEventListener("click", function (event) {
  generateRandomNumber(minimumValue, maximumValue, event);
});
