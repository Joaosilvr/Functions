// exercicio 11

function soma(num1,num2){
    let resultadoSoma = num1 + num2
    return resultadoSoma
}

function subtracao(num1,num2){
   let resultadoSub = num1 - num2
   return resultadoSub
}

function multip(num1,num2){
   let resultadoMult = num1 * num2
   return resultadoMult
}

function divisao(num1,num2){
    let resultadoDivis = num1 / num2
    return resultadoDivis
}

let num1 = prompt('insira um numero')
let num2 = prompt('insira outro numero')


console.log(
    `Números inseridos: ${num1} e ${num2}
    Soma: ${soma(num1,num2)}
    Diferença: ${subtracao(num1,num2)}
    Multiplicação: ${multip(num1,num2)}
    Divisão: ${divisao(num1,num2)}
`);
