function calcularImc(event) {
  event.preventDefault();

  const alturaInput = parseFloat(document.getElementById("height").value);
  const pesoInput = parseFloat(document.getElementById("weight").value);

  const calculo = pesoInput / (alturaInput * alturaInput);
  let categoria = "";

  if (calculo <= 18.5) {
    categoria = "Abaixo do peso";
  } else if (calculo <= 24.9) {
    categoria = "Peso adequado";
  } else {
    categoria = "Obesidade";
  }

  document.getElementById("imcValue").innerHTML = calculo.toFixed(2);
  document.getElementById("imcCategory").innerHTML = categoria;
  
  document.getElementById("result").style.display = "block";
}
