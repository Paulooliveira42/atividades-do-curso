// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }
  
  // Função para interpretar o resultado do IMC
  function interpretarIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  }
  
  // Captura os elementos HTML
  const pesoInput = document.getElementById("peso");
  const alturaInput = document.getElementById("altura");
  const calcularButton = document.getElementById("calcular");
  const resultadoDiv = document.getElementById("resultado");
  
  // Adiciona um ouvinte de evento ao botão de cálculo
  calcularButton.addEventListener("click", () => {
    // Obtém os valores de peso e altura
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);
  
    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultadoDiv.textContent = "Por favor, insira valores válidos.";
      return;
    }
  
    // Calcula o IMC
    const imc = calcularIMC(peso, altura);
  
    // Interpreta o resultado do IMC
    const resultado = interpretarIMC(imc);
  
    // Exibe o resultado na página
    resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)} (${resultado})`;
  });