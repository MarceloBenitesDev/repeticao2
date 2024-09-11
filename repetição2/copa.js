function AnoCopa(ano) {
    const semcopa = [1942, 1946];
  
    if (ano === 0) {
      return "Parando a execução.";
    }
  
    if (ano < 1930 || (ano - 1930) % 4 !== 0 || semcopa.includes(ano)) {
      return `O ano ${ano} não é ano de Copa.`;
    } else {
      return `O ano ${ano} é um ano de Copa.`;
    }
  }
  
  function verificar() {
    const prompt = require('prompt-sync')();
  
    let ano = -1;
  
    while (ano !== 0) {
      ano = parseInt(prompt('Escreva um ano (ou 0 caso queira sair): '), 10);

      if (isNaN(ano)) {
        console.log('Este número é inválido.');
        continue;
      }
  
      console.log(AnoCopa(ano));
    }
  }

  verificar();