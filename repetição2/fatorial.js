function fatorial(n) {
    if (n < 0) {
      return "Fatorial invalido.";
    }

    let resultado = 1;
  
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
  
    return resultado;
  }

  function verificar() {
    const prompt = require('prompt-sync')();
    let n = -1;
  
    while (n !== 0) {
      n = parseInt(prompt('Escreva um numero: '), 10);

      if (isNaN(n)) {
        console.log('Fatorial inválido.');
        continue;
      }
  
    if (n < 0) {
      console.log("fatorial invalido.")
    } else {
      console.log(`O fatorial de ${n} é ${fatorial(n)}`);
    }
    }
  }
  
  verificar();