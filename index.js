var x = prompt("Enter a Value", "0");
var num = parseInt(x);

document.getElementById("number").textContent = x

//length
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

let feetCalc = 3.2808 * num
let meterCalc = num / 3.2808
let lengthStr = num + " meters = " + feetCalc.toFixed(3) + " feet | " + num + " feet = " + meterCalc.toFixed(3) + " meters"

lengthEl.innerText = lengthStr

//volume
let galCalc = num / 3.785
let literCalc = num * 3.785
let volumeStr = num + " liters = " + galCalc.toFixed(3) + " gallons | " + num + " gallons = " + literCalc.toFixed(3) + " liters"

volumeEl.innerText = volumeStr

//mass
let kiloCalc = num / 2.2046
let poundCalc = num * 2.2046
let massStr = num + " kilos = " + poundCalc.toFixed(3) + " pounds | " + num + " pounds = " + kiloCalc.toFixed(3) + " kilos"

massEl.innerText = massStr


