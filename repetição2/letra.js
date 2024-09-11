function conta(palavra, letra) {
  let contador = 0;


  if (letra.length !== 1) {
      console.log('Só pode uma letra.');
      return;
  }

  for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) {
          contador++;
      }
  }

  return contador;
}

const palavra = 'Dromedario'; //Pode ser qualquer palavra
const letra = 'o'; //pode ser qualquer letra
const resultado = conta(palavra, letra);

console.log(`A letra '${letra}' aparece ${resultado} vezes na palavra '${palavra}'.`);