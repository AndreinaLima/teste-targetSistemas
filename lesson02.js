// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function pertenceFibonacci(numero) {
  if (numero < 0) return false;

  let a = 0;
  let b = 1;

  if (numero === a || numero === b) return true;

  while (b <= numero) {
    let proximo = a + b;
    a = b;
    b = proximo;

    if (b === numero) return true;
  }

  return false;
}



  const numero = 13

  const resultado = pertenceFibonacci(numero);

  if (resultado) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }

