const inputTitulo = document.querySelector("#input-titulo");
const tituloH1 = document.querySelector(".titulo");

function atribuirNovoValorAoH1() {
  const novoValor = inputTitulo.value;

  tituloH1.textContent = novoValor;
}

const botaoAtualizar = document.querySelector("#botao-atualizar");

botaoAtualizar.addEventListener("click", atribuirNovoValorAoH1);
