// currency day cotation
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// manipulate the input amount to receive only numbers
amount.addEventListener("input", () =>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// getting the currently currency
form.addEventListener("submit", (e) =>{
    e.preventDefault()

    // using switch case instead if
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
})

// function to convert currency to brl
function convertCurrency(amount, price, symbol){
    console.log(amount, price, symbol)

    try{
        // updating the currency coin
        description.textContent= `${symbol} 1: = ${formatCurrencyBRL(price)}`

        let total = String(amount * price).replace(".", ",")
        // show the real result
        result.textContent = `${total} Reais`

        // apply the class to show the footer with result
        footer.classList.add("show-result")

    } catch (error){
        // remove the footer class, removing from screen
        footer.classList.remove("show-result")
        alert("Something went wrong. Try again later")

    }

//  format the currency to BRL
function formatCurrencyBRL(value){
    // convert to number to utilize the toLocaleString to format on BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
}