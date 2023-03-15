function add(a,b){
  // var a = Number(document.getElementById("a").value)
  // var b = Number(document.getElementById("b").value)
  // document.getElementById("result").innerHTML = a + b;
  return a + b;
}

function subtract(a,b){
  // var a = Number(document.getElementById("a").value)
  // var b = Number(document.getElementById("b").value)
  // document.getElementById("result").innerHTML = a - b;
  return a-b
}

function multiply(a,b){
  // var a = Number(document.getElementById("a").value)
  // var b = Number(document.getElementById("b").value)
  // document.getElementById("result").innerHTML = a * b;
  return a * b
}


function division(a,b){
  // var a = Number(document.getElementById("a").value)
  // var b = Number(document.getElementById("b").value)
  // document.getElementById("result").innerHTML = a / b;
  return a/b
}

function calculate(){
  var a = Number(document.getElementById("a").value)
  var b = Number(document.getElementById("b").value)
  var arthimeticOperations = document.getElementById("operator").value
  var displayType = document.getElementById("display").value
  // add(a,b)
  // subtract(a,b)

  if(arthimeticOperations == "add"){
    operation = add
  } else if(arthimeticOperations == "subtract") {
    operation = subtract
  } else if(arthimeticOperations == "multiply"){
    operation = multiply
  } else {
    operation = division
  }

  if(displayType == "html"){
    outputType = showHtmlOutput
  } else if(displayType == "console"){
    outputType = showConsoleOutput
  } else {
    outputType = showAlertOutput
  }

  displayResult(a,b,operation,outputType)
}

function displayResult(a,b,operator,showDisplayIn){
  showDisplayIn(operator(a,b))
}

function showHtmlOutput(res){
    document.getElementById("result").innerHTML = res
}

function showConsoleOutput(res){
  console.log(res)
}

function showAlertOutput(res){
  alert(res)
}