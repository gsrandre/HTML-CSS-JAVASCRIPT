const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")// Valor em Real
const CurrencyValueConverted = document.querySelector(".currency-value")// Outras moedas

    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2


if(currencySelect.value == "dolar"){

    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency:"USD"
}).format(inputCurrencyValue / dolarToday) 

}

if(currencySelect.value == "euro"){
    
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"EUR"
    }).format(inputCurrencyValue / euroToday)
}

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue) //Para formatar os valores
   
}

function changeCurrency(){
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues()//Para refazer a conversão após a troca de bandeira

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)//para adicionar um envento
