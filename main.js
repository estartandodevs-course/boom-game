// [FEITO] capturar o elemento html em que vamos inserir os baloes
// [FEITO] adicionar o balão no container
// [FEITO] determinar um intervalo de tempo para adicionar os baloes sequencialmente
// [FEITO] identificar quando um balao é clicado
// [FEITO] criar uma função para remover o balao
// [FEITO] Contador no jogo

// TO DO
// [] Acelerar aparição dos balões conforme vão sendo estourados
// [] Limite de X baloes na tela

const containerBaloes = document.querySelector(".container-baloes");

let pontuacao = 0;

function adicionarBalao() {
  const elementoImg = document.createElement("img");

  elementoImg.setAttribute("src", "./assets/baloon.png");
  elementoImg.setAttribute("class", "balao");

  const valorLeft = Math.round(Math.random() * 90);
  const valorTop = Math.round(Math.random() * 90);

  elementoImg.style.left = valorLeft + "vw";
  elementoImg.style.top = valorTop + "vh";

  // usando função separada para remover
  elementoImg.addEventListener("click", () => removeBalao(elementoImg));

  // + 1 opção de remoção do elemento
  // elementoImg.addEventListener("click", (event) => {
  // event.target.remove();
  // });

  containerBaloes.appendChild(elementoImg);

  const arrayBaloes = document.querySelectorAll(".balao");
  const quantidadeDeBaloes = arrayBaloes.length;

  // PERDE
  if (quantidadeDeBaloes === 3) {
    clearInterval(intervalBalao);

    alert("Você perdeu!");
    pontuacao = 0;
    atualizarPontuacao(0);

    const arrayElementosFilhos = Array.from(containerBaloes.children);

    arrayElementosFilhos.forEach((elementoFilho) => {
      removeBalao(elementoFilho, false, false);
    });
  }
}

function removeBalao(element, executarSom = true, somarPontuacao = true) {
  if (executarSom) {
    const boomSound = new Audio("./assets/boom.mpeg");
    boomSound.volume = 0.1;
    boomSound.play();
  }

  containerBaloes.removeChild(element);

  if (somarPontuacao) {
    pontuacao = pontuacao + 1;
    atualizarPontuacao(pontuacao);
  }
}

function atualizarPontuacao(novaPontuacao) {
  const elementoPontuacao = document.querySelector("#pontuacao");

  elementoPontuacao.textContent = novaPontuacao;
}

const intervalBalao = setInterval(adicionarBalao, 3000); //3000 milesegundos = 3 segundos
