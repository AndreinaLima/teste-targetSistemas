// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const readline = require("readline")

// Cria uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function inverterString(str) {
  let stringInvertida = ""

  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i] 
  }

  return stringInvertida 
}

function main() {
  rl.question("Digite a string que deseja inverter: ", (entrada) => {
    const resultado = inverterString(entrada)

    console.log("String invertida:", resultado)

    rl.close()
  })
}
main()
