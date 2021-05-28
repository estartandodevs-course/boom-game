const inputTitulo = document.querySelector("#input-titulo");
const tituloH1 = document.querySelector(".titulo");

function atribuirNovoValorAoH1() {
  const novoValor = inputTitulo.value;

  tituloH1.textContent = novoValor;
}

const header = document.querySelector("h2");
console.log("HEADER ->", header);
