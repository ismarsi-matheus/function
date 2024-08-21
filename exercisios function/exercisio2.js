//Soma os numeros do 1 ate o 100
function soma100 (contador ,soma){
    contador = 1
    soma = 0
    
    while (contador <= 100) {
      soma += contador
      contador++
    }
      return soma
    }
    
    console.log(soma100())