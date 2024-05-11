// drum kit by clicking
var allBtn = document.querySelectorAll(".drum");
for (let i = 0; i < allBtn.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML;

    makeSound(btnInnerHTML);

    buttonAnimation(btnInnerHTML);
  });
}

// by pressing keybord
document.addEventListener("keypress", function (e) {
  makeSound(e.key);

  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
  }
}

switch (btnInnerHTML) {
  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

  case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

  case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

  case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

  case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

  case "k":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

  case "l":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

  default:
    console.log(btnInnerHTML);
}

// make animation for the active drum

function buttonAnimation(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);

  activeBtn.classList.add("pressed");

  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100);
}
