const buttonInitGame = document.querySelector(".btn-init-game");
let level = document.querySelector(".levels input:checked").value

function setLevel() {
  level = this.value
}

buttonsGameLevelContainer = document.querySelector(".levels");
buttonsGameLevel = buttonsGameLevelContainer.querySelectorAll("input")
buttonsGameLevel.forEach((button) => { button.addEventListener("click", setLevel) });

buttonInitGame.addEventListener("click", function () {
  buttonInitGame.remove();
  document.querySelector(".game-levels").remove();
  // .forEach(function () { this.remove() });
  initGame();
});

function initGame() {
  const timeLevel = {
    easy: 2000,
    medium: 1000,
    hard: 500
  }
  console.log(timeLevel[level])
  setInterval(createBalloon, timeLevel[level]);
}

const balloonsContainer = document.querySelector(".container-balloons");

function createBalloon() {
  const elementImg = document.createElement("img");

  elementImg.setAttribute("src", "./assets/baloon.png");
  elementImg.setAttribute("class", "balloon");

  const positionLeft = Math.round(Math.random() * 90);
  const positionTop = Math.round(Math.random() * 90);

  elementImg.style.left = positionLeft + "vw";
  elementImg.style.top = positionTop + "vh";

  elementImg.addEventListener("click", function () {
    removeBalloon(this);
  });

  balloonsContainer.appendChild(elementImg);
}

function removeBalloon(element) {
  const boomSound = new Audio("./assets/boom.mpeg");
  boomSound.play();
  boomSound.volume = 0.1;
  element.remove();
}
