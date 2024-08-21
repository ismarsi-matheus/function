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

//isNaN() é uma função  que verifica se um valor é "Not a Number" (não é um número). Ela retorna true se o valor não for um número válido e false caso contrário.

//parseInt() é uma função  que converte uma string em um número inteiro. Ela tenta extrair um número inteiro da string, começando da esquerda, e retorna o valor convertido.
