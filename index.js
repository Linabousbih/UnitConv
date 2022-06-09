

function convert(){
    let x =document.getElementById("number-el").value

console.log(x)

let metersResult = x * 3.8084
metersResult=Number((metersResult).toFixed(3))
let feetResult = x * 0.3048
feetResult=Number((feetResult).toFixed(3))
let litersResult = x * 0.2641720524
litersResult=Number((litersResult).toFixed(3))
let gallonsResult = x * 3.785
gallonsResult=Number((gallonsResult).toFixed(3))
let kilosResult = x * 2.20462
kilosResult=Number((kilosResult).toFixed(3))
let poundsResult = x * 0.453592
poundsResult=Number((poundsResult).toFixed(3))

document.getElementById("result-m").textContent= x + " meters"+" = "+ metersResult + " feet" +" | "+ x +" feet"+" = " + feetResult +" meters"
document.getElementById("result-v").textContent= x + " liters"+" = "+ litersResult + " gallons" +" | "+ x +" gallons"+" = " + gallonsResult +" liters"
document.getElementById("result-k").textContent= x + " kilograms"+" = "+ kilosResult + " pounds" +" | "+ x +" pounds"+" = " + poundsResult +" kilos"
}

