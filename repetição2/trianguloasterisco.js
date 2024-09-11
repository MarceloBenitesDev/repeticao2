function imprimirTriangulo(n) {
    for (let i = 1; i <= n; i++) {
        let linha = '';
      for (let j = 1; j <= n - i; j++) {
        linha += ' ';
      }
      for (let k = 1; k <= i; k++) {
        linha += '*';
      }
      console.log(linha);
    }
  }
  
  imprimirTriangulo(40); //insira qualquer numero