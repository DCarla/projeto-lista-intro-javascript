// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura =   prompt ("Digite altura" )
let largura =  prompt ("Digite o largura")
let area = altura * largura
console.log(area)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt ("Ano Atual" )
  let anoNascimento = prompt ("Ano Nascimento")
  let idade = anoAtual - anoNascimento
  console.log (idade)

}

// EXERCÍCIO 03
function calculaIMC(peso,altura) {
  // implemente sua lógica aqui

  let imc = peso / (altura * altura)
  return ("Seu IMC é", imc)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome =   prompt ("Digite seu nome" )
  const idade =  prompt ("Digite sua idade")
  const email  = prompt ("Digite seu e-mail")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  
  const  cor1 = prompt("Digite sua primeira cor favorita" )
  const  cor2 = prompt("Digite sua segunda  cor favorita" )
  const  cor3 = prompt("Digite sua terceira cor favorita" )
  
  const arrayCores = [cor1, cor2, cor3]
  console.log (arrayCores) 
}
  

// EXERCÍCIO 06
const string = banana
function retornaStringEmMaiuscula(string) {
  
  // implemente sua lógica aqui

  const palavramaiscula = string.toUpperCase()

  return palavramaiscula 
  
}


// EXERCÍCIO 07

const custo = prompt( "Digite o custo")
const valorIngresso = prompt ("Digite o valor do ingresso")

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

const preco = custo / valorIngresso

return preco
}

// EXERCÍCIO 08

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const checaMT = string1.length == string2.length

return checaMT

}
checaStringsMesmoTamanho(string1, string2)

// EXERCÍCIO 09

const array  = [1,2,3,4,5]
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}
retornaPrimeiroElemento(array)

// EXERCÍCIO 10

const num1 = prompt ("Digite um sequencia numeros")
array = num1.split(" ")
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length-1]
   
}
retornaUltimoElemento(array)

// EXERCÍCIO 11


function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

const n1array = array[array.length-1] 
const n2array = array[0]

array.pop()
array.shift()

array.unshift(n1array)
array.push(n2array)

return array
} 


// EXERCÍCIO 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 
  const verifica = string1.toUpperCase() === string2.toUpperCase()
  return verifica

}
checaIgualdadeDesconsiderandoCase(string1, string2)

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}