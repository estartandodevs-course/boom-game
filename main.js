const buttonInitGame = document.querySelector(".btn-init-game");
const counter = document.querySelector(".counter");

let points = 0;

buttonInitGame.addEventListener("click", function () {
  buttonInitGame.remove();
  counter.style.display = "block";
  initGame();
});

function initGame() {
  setInterval(createBalloon, 1000);
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

  counter.textContent = points += 1;
}
