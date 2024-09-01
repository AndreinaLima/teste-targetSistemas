// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


function analisarFaturamento(dados) {
  let menorFaturamento = Infinity; 
  let maiorFaturamento = -Infinity; 
  let somaFaturamento = 0;
  let quantidadeDiasComFaturamento = 0;


  for (let i = 0; i < dados.length; i++) {
    let faturamento = dados[i].faturamento;
    
    if (faturamento > 0) {
      if (faturamento < menorFaturamento) {
        menorFaturamento = faturamento;
      }
      if (faturamento > maiorFaturamento) {
        maiorFaturamento = faturamento;
      }

      somaFaturamento += faturamento;
      quantidadeDiasComFaturamento++;
    }
  }

  if (quantidadeDiasComFaturamento === 0) {
    console.log('Não há dados de faturamento para calcular.');
    return;
  }

  let mediaMensal = somaFaturamento / quantidadeDiasComFaturamento;

  let diasAcimaMedia = 0;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].faturamento > mediaMensal) {
      diasAcimaMedia++;
    }
  }

  console.log(`Menor valor de faturamento: ${menorFaturamento}`);
  console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
  console.log(`Média Mensal: ${mediaMensal.toFixed(0)}`);
  console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaMedia}`);
}

const dadosJson = [
  {"dia": "2024-01-01", "faturamento": 0},
  {"dia": "2024-01-02", "faturamento": 200},
  {"dia": "2024-01-03", "faturamento": 150},
  {"dia": "2024-01-04", "faturamento": 0},
  {"dia": "2024-01-05", "faturamento": 300},
];

analisarFaturamento(dadosJson);
