function somaDigitosUsuario() {
    resultado = 0;
  
    while (true) {
      numero_usuario = prompt("Digite um número (ou 'soma' para resultado): ");
      if (numero_usuario === "soma") {
        break;
      }
      numero = parseInt(numero_usuario, 10);
      
      if (!isNaN(numero)) {
        resultado += numero;
      } else {
        alert("Entrada inválida. Por favor, digite um número.");
      }
    }
  
    alert("A soma dos números digitados é: " + resultado);
  }
  
  somaDigitosUsuario();