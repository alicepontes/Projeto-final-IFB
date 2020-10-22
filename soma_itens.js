document.getElementById("btn-card").addEventListener("click", () => {
  let btnHortalicas = Number(document.getElementById("btn-card").value);
  if (btnHortalicas != 1) {
    somaItens = 45.9 + 1;
    document.querySelector(
      "#resultado"
    ).innerHTML += ` Residencial:${somaItens} `;
  }
});
