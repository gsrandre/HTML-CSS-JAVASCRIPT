console.log('O que eu quiser')

/*
  variáveis
  -let -> Pode alterar o valor quando quiser
  -Const -> valor NÃO pode ser declarado NOVAMENTE
  -var -> DESCONTINUADO / NÃO USA HOJE EM DIA

*/

/*
Para executar Ctrl+alt+N
 */
let abacate = 40
abacate = 30
console.log(abacate)

/*String->texto
"Texto com aspas duplas"
'Texto com aspas simples'
´Texto com a crase´
*/

/* template literals ou template string permite chamar a variável dentro da frase
como no exemplo abaixo */
const myAge = 30
const myString = `minha idade é ${myAge}`

console.log(myString)

/* Number=números*/
const number1 =32/2
console.log(number1)

/* Boolean->Boleano
 True ou false
 */

 /*Object-> Objetos*/

const andre={
name: 'André',
age:34,
address: {
street: 'Dos bobos',
number:0,
city:'Esmeraldas',
}
}

console.log(andre)

/* Null = Vc coloca Nulo 
Undefined = Faltando a informação/ busca e não encontra
*/

/* Array= serve para guardar várias informações

exemplo:

*/
const users = [
  {
  nome:'Andre',
  idade:34,
  conjuge: 'Andre',
},

{
  nome:'Patricia',
  idade:34,
  conjuge: 'Patricia',
  }

]

/* if (Se) Else(Se não)

>  - Maior
<  - Menor
=  - Igual
== - Comparação
 */

const notaDoAluno = 3
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte){ 
  console.log("Parabéns, vc passou de ano")
}
else { 
  console.log("vc foi reprovado")
}

/*  Functions / Funções
      Trecho de código que é executado
      SOMENTE quando solicitado
*/

 const variavel = "Abacate"
 console.log(variavel)

 function nomeNaTela(){
  console.log("Andre")
 }
 nomeNaTela()