/*
document -> HTML
getElementById -> Trás UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa classe
getElementByTagName -> Trás TODOS os elemento com essa TAG
getElementByName -> Trás TODOS os elementos com esse NAME

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS  os elementos que encontrar
*/


/*
const input = document.getElementById("main-input")
console.log(input)
*/

/*
const element = document.getElementsByClassName("paragraph-js")
console.log(element)
*/

/*
const element = document.getElementsByTagName("p")
console.log(element)
*/

/*
const element = document.getElementsByName("nome-completo")
console.log(element)
*/

/*
const element = document.querySelector("p.main-button")
console.log(element)
*/

/*
const element = document.querySelector("p")
console.log(element)
*/

/*
const element = document.querySelector("#main-input")
element.placeholder = "Agora é esse texto"
console.log(element.placeholder)
*/


/*
textContent -> Pega todo o Conteúdo
innerText -> Pega APENAS o texto
innerHTML -> Permite adicionar HTML e texto

const element = document.querySelector(".paragraph-js")

element.innerHTML = "Texto novo <b>Olá</b>" //Alerando o texto e HTML


console.log(element.textContent) // Só HTML
console.log(element.innerText) // Leva em conta o CSS
console.log(element.innerHTML) // Trás Tudo -> Permite adicionar HTML
*/

/*Alterando CSS(estilos) no JavaScript*/

const button =document.querySelector(".main-button")

button.style.backgroundColor = "#852394"


/* Eventos

Todo envento começa com On*/

const input = document.querySelector ("#main-input")

function cliqueiNoBotao (){
    
    console.log(input.value)
    alert("Botão clicado com sucesso!")

}

function digiteiNoInput (){
    console.log("digitei no input")
}
