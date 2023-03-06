var a = 10;
var b = "20";
var c = 30;
// b = Number(b)
b= parseInt(b)

var sum = a + b + c;

console.log(sum)
console.log(typeof sum)

var d = "10.89"
console.log(typeof d , d)
d = Number(d)
console.log(typeof d, d)

var x = 123;
console.log(typeof x)
x = x.toString()
console.log(typeof x)

var balance = 10.727652
balance = balance.toFixed(3)
console.log(balance)


// round number

var bill = 345.49
bill = Math.round(bill)
console.log(bill)

// ceil 

var ceilBill = Math.ceil(bill)

var groceryBill = 325.1;
console.log(Math.ceil(groceryBill))

// floor
console.log(bill + 0.254)
console.log(Math.floor(bill))

// Power of a number
var powerValue = Math.pow(4,3)
console.log(powerValue)

//square root of a number

var sqrtValue = Math.sqrt(100)
console.log(sqrtValue)

// absolute value always gives a positive value;
var hyderabad = 600
var vijayawada = 350
var distance = 350-600
distance = Math.abs(distance)
console.log(distance, "distance b/w vijaywada and hyderabad")

// finding maximum and minimum number

var maxValue = Math.max(45,6754,1,3,5,23,5,212,546,234)
var minValue = Math.min(5,0,-581,3,5,23,5,212,546,234)

console.log("mav Value =", maxValue, "min Value =", minValue)