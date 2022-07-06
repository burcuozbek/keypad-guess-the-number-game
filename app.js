// Elements
var guesses = document.getElementById("code");
var input = document.getElementById("code");
var result = document.querySelector(".result");
var submit = document.querySelector(".submit");
var btn_group = document.querySelectorAll(".btn-group button");

btn_group.forEach((button) => {
  button.addEventListener("click", function () {
    const focusElement = button.textContent.trim();
    if (focusElement === "0") {
      print(0);
    } else if (focusElement === "1") {
      print(1);
    } else if (focusElement === "2") {
      print(2);
    } else if (focusElement === "3") {
      print(3);
    } else if (focusElement === "4") {
      print(4);
    } else if (focusElement === "5") {
      print(5);
    } else if (focusElement === "6") {
      print(6);
    } else if (focusElement === "7") {
      print(7);
    } else if (focusElement === "8") {
      print(8);
    } else if (focusElement === "9") {
      print(9);
    }
  });
});

function print(data) {
  input.value += data;
}
document.addEventListener("DomContentLoaded", start());
function start() {
  guesses.value = null;
}
submit.addEventListener("click", function () {
  checkGuess();
});
// Generate a number
var randomNumber = Math.floor(Math.random() * 10000);

document.body.addEventListener("keyup", pressKeyboard);
function pressKeyboard(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    submit.click();
  }
}
function checkGuess() {
  //   Convert user choice to a number
  var userGuess = Number(guesses.value);
  userGuess;
  if (userGuess === null || userGuess === NaN) {
    alert("Please type a number!");
  }
  if (userGuess === randomNumber) {
    //    WIN
    input.value = "You win!";
    clearInput();
    location.reload();
  } else if (userGuess > randomNumber) {
    //   BIGGER THAN RANDOM NUMB
    input.value = "Last guess was too high!";
    clearInput();
  } else if (userGuess < randomNumber) {
    //   LESS THAN RANDOM NUMB
    input.value = "Last guess was too low!";
    clearInput();
  }
}
function clearInput() {
  setTimeout(function () {
    input.value = "";
  }, 500);
}
function blurAll() {
  var tmp = document.createElement("input");
  document.body.appendChild(tmp);
  tmp.focus();
  document.body.removeChild(tmp);
}
