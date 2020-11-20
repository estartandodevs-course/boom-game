const buttonInitGame = document.querySelector(".btn-init-game");

buttonInitGame.addEventListener("click", function () {
  buttonInitGame.remove();
  initGame();
});

let myVar = undefined

function initGame() {
  myVar = setInterval(createBalloon, 1000);
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

  if (balloonsContainer.children.length < 25) {
    balloonsContainer.appendChild(elementImg);
  } else {
    gameOver()
  }

}

function removeBalloon(element) {
  const boomSound = new Audio("./assets/boom.mpeg");
  boomSound.play();
  boomSound.volume = 0.1;
  element.remove();
}

function gameOver() {

  clearInterval(myVar)

  let childrens = balloonsContainer.children

  for (let i = 0; i < balloonsContainer.children.length; i++) {
    balloonsContainer.removeChild(childrens[i])
  }

  balloonsContainer.innerHTML = `<div class="lost"> You Lost </div>`

  let restart = document.createElement("a")
  restart.setAttribute("class", "btn_restart")
  restart.href = "index.html"
  restart.textContent = "Jogar Novamente"

  balloonsContainer.appendChild(restart)

  soundGameOver()

}

function soundGameOver() {
  const boomSound = new Audio("./assets/game-over.mp3");
  boomSound.play();
  boomSound.volume = 0.5;
}
