const key = "b143d35e4c57e75bd376cb5fb50d91db"

 function ColocarDadosNaTela(dados){

    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"//math.flor para arredondar os digitos

    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description

    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
  
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

 }



async function BuscarCidade(cidade){

//&lang=pt_br para trazer em português e &units=metric para converter a temperatura

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    ColocarDadosNaTela(dados)
    }

function cliqueiNoBotao (){
    const cidade = document.querySelector(".input-cidade").value

    BuscarCidade(cidade)
}