const buttonInitGame = document.querySelector(".btn-init-game");
let level = document.querySelector(".levels input:checked").value
const buttonsGameLevelContainer = document.querySelector(".levels");
const buttonsGameLevel = buttonsGameLevelContainer.querySelectorAll("input");
const balloonsContainer = document.querySelector(".container-balloons");
const balloonLimit = 4;

function setLevel() {
  level = this.value
}

function initGame() {
  const timeLevel = {
    easy: 2000,
    medium: 1000,
    hard: 500
  }

  const idInterval = setInterval(manageGame, timeLevel[level]);
  function manageGame() {
    const allBallons = document.querySelectorAll(".balloon");
    if (allBallons.length >= balloonLimit) {
      clearInterval(idInterval);
      showGameOver();
      return
    }
    createBalloon();
    console.log("dentro")
  }

}

function createBalloon() {
  const elementImg = document.createElement("img");
  const positionLeft = Math.round(Math.random() * 90);
  const positionTop = Math.round(Math.random() * 90);

  elementImg.setAttribute("src", "./assets/baloon.png");
  elementImg.setAttribute("class", "balloon");
  elementImg.style.left = positionLeft + "vw";
  elementImg.style.top = positionTop + "vh";

  elementImg.addEventListener("click", function () {
    removeBalloon(this);
  });

  balloonsContainer.appendChild(elementImg);
}

function showGameOver() {
  const elementGameOver = document.createElement("section");
  elementGameOver.setAttribute("class", "game-over-container");

  const textGameOver = document.createElement("h2");
  textGameOver.innerText = "Você perdeu, loser!";
  textGameOver.style.color = "#000000";

  elementGameOver.appendChild(textGameOver);
  balloonsContainer.appendChild(elementGameOver);
}

function removeBalloon(element) {
  const boomSound = new Audio("./assets/boom.mpeg");
  boomSound.play();
  boomSound.volume = 0.1;
  element.remove();
}

buttonsGameLevel.forEach((button) => { button.addEventListener("click", setLevel) });

buttonInitGame.addEventListener("click", function () {
  buttonInitGame.remove();
  document.querySelector(".game-levels").remove();
  initGame();
});