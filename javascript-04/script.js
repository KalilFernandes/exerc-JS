    document.getElementById('imcForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o envio do formulário

      // Captura os valores de peso e altura
      const height = parseFloat(document.getElementById('height').value);
      const weight = parseFloat(document.getElementById('weight').value);

      // Calcula o IMC
      const imc = weight / (height * height);
      const imcValue = document.getElementById('imcValue');
      const imcCategory = document.getElementById('imcCategory');
      const result = document.getElementById('result');

      // Exibe o resultado
      imcValue.textContent = imc.toFixed(2);
      result.style.display = 'block';

      // Classificação do IMC
      if (imc < 28.5) {
        imcCategory.textContent = "Classificação: Abaixo do peso";
      } else if (imc < 34.9) {
        imcCategory.textContent = "Classificação: Peso normal";
      } else if (imc < 59.9) {
        imcCategory.textContent = "Classificação: Sobrepeso";
      } else {
        imcCategory.textContent = "Classificação: Obesidade";
      }
    });
