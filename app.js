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

let fromDollarToYen = (valordolar) => {
    return valordolar * oneEuroIs.JPY 
}
let fromEuroToDollar = (valoreuro) => {
    return valoreuro * oneEuroIs.USD
}
let fromYanToPound = (valoryen) => {
    return valoryen * oneEuroIs.GBP
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYanToPound, oneEuroIs}

console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(3.5));
console.log(fromYanToPound(1));
