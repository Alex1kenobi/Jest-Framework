 //esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneDollarIs = {

   "EUR": 1.44,
   "JPY": 106.58,
   "GBP": 0.67,
}

let oneYenIs = {

    "EUR": 0.00787,
    "USD": 0.00945,
    "GBP": 0.00630,
}

let onePoundis = {

    "EUR": 1.25,
    "USD": 1.50,
    "JPY": 159.88,
}

let fromDollarToYen = (valordolar) => {
    return valordolar * oneDollarIs.JPY
}
let fromEuroToDollar = (valoreuro) => {
    return valoreuro * oneEuroIs.USD
}
let fromYanToPound = (valoryen) => {
    return valoryen * oneYenIs.GBP
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYanToPound, oneEuroIs}

console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(3.5));
console.log(fromYanToPound(1));
