// exercicio 8

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// A função faz o texto ficar em letra maiuscula e verificar se contem a palavra cenoura

// 1 true
// 2 true
// 3 true