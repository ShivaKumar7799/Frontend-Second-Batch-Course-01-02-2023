(function (){
  var a = Number(document.getElementById('aValue').value)
  var b = Number(document.getElementById("bValue").value)

  var sum = a+b;
  console.log(a,b)
  document.getElementById("result").innerHTML = "Welcome to my channel"
})()

// Regular Functions

function Hello(){
  var hello = "Hello abc"
  var world = "World 123"
  var result = hello + " " +  world
  console.log(result)
}

Hello()
Hello()
Hello()

function akhil(){
  console.log("my name is akhil")
}

function Aravind(){
  console.log("my name is aravind")
}

function Vishnu(){
  console.log("my name is vishnu")
}


Aravind()
Aravind()
akhil()
Vishnu()
Aravind()
Vishnu()
akhil()

function PrintName(name){
  console.log("my name is",name)
}

PrintName("Aravind")
PrintName("Vishnu")
PrintName("Akhil")
PrintName("Shiva kumar")

function addition(){
  var a = 4;
  var b = 19;
  var sum = a + b;
  console.log(sum)
}

addition()

function addition5and20(){
  var a = 5;
  var b = 20;
  var sum = a + b;
  console.log(sum)
}

addition5and20()

function add(a,b){
  var sum = a + b;
  console.log(sum)
}

add(5,20)
add(4,19)
add(1,2)
add(3,5)

function addAndDouble(a,b,c){
  var sum = a+b+c;
  var doubleSum = 2*sum
  console.log("double sum value", "a =", a, "b = ",b, "c =",c, "result =",doubleSum)
}

addAndDouble(1,2,3)
addAndDouble(2,4,5)


function addAndTriple(a,b,c){
  var sum = a+b+c
  var tripleSum = 3 * sum;
  console.log("triple sum value", "a =", a, "b = ",b, "c =",c, "result =",tripleSum)
}

addAndTriple(1,2,3)
addAndTriple(2,4,5)


function addAndMultiplyWithNumber(a,b,c, mulitplyNumber){
  var sum = a + b +c;
  var result = sum * mulitplyNumber
  return result
}

var sumWith2  = addAndMultiplyWithNumber(1,2,3,2)
console.log(sumWith2)


addAndMultiplyWithNumber(2,4,5,2)

var sumWith3 = addAndMultiplyWithNumber(1,2,3,3)
console.log(sumWith3)

addAndMultiplyWithNumber(2,4,5,3)

function addition(){
  var a = Number(document.getElementById("aValue").value)
  var b = Number(document.getElementById("bValue").value)
  var sum = a + b;
  // document.getElementById("result").innerHTML = "Result = " + sum
  document.getElementById("result").innerHTML = `Value of a = ${a} and Value of b = ${b} and Result = <span style="color : green; font-size : 30px" > ${sum} </span>`
}

// default Parameters

function multiply(a,b,c = 1){
  if(c == undefined){
    c = 1
  }
  var result = a * b * c
  console.log(result)
}

multiply(4,2)

function multiply(a,b,c){
  if(c == undefined){
    c = 5
  }
  var result = a * b * c
  console.log(result)
}

multiply(4,2)