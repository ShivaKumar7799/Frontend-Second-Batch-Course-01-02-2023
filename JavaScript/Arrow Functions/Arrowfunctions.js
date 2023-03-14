// function addition(){
//   var a = Number(window.prompt("enter the value of a"));
//   var b = Number(window.prompt("Enter the value of b"))
//   var sum = a+b;
//   console.log(`addition of ${a} and ${b} = ${sum} `)
// }

const addition = () => {
    var a = Number(window.prompt("enter the value of a"));
    var b = Number(window.prompt("Enter the value of b"))
    var sum = a+b;
    console.log(`addition of ${a} and ${b} = ${sum} `)
}

addition()

function subtraction(a,b){
  return a-b
}

var subtractionResult = subtraction(8,3);
console.log(subtractionResult)


// arrow Function

const subt = (a,b) => a-b;

var subResult = subt(3,8)
console.log(subResult)