// Operator Types:

// 1. Assignment Operator

  var a = 234;
  console.log(a)

// 2. Arthemetic Operators
//      +,-,*,/,%

var balance = 520;
var creditedAmount = 250;
var currentBalance = balance + creditedAmount;
console.log("balance after credited 250 rupees = ",currentBalance)

var debitedAmount = 300;
currentBalance = currentBalance - debitedAmount
console.log("balance after debited 300 rupees = ", currentBalance)

var apples = 12;
var oneApplePrice = 20;
var totalApplesPrice = apples * oneApplePrice;
console.log("12 apples price = ",totalApplesPrice)

var fiveApplesPrice = oneApplePrice * 5;
console.log("five Apples Price =",fiveApplesPrice)

var nineApplesPrice = (totalApplesPrice/apples) * 9
console.log(nineApplesPrice)

var annulaSalary = 360000;
var oneMonthSalary = annulaSalary / 12;
console.log("One month salary =", oneMonthSalary)

const noOfOranges = 65;
var totalPerson = 3;

var remainingOrangesAfterShare = noOfOranges % 3;
console.log("no'of oranges remaining after shared by 3 persons =", remainingOrangesAfterShare);

var onePersonFruitsShare = noOfOranges /3;
console.log("one person fruit share =", parseInt(onePersonFruitsShare)," ", Math.floor(onePersonFruitsShare) )

// 3. Logical Operarots

let personName = "abc"
const personAge = "37";

console.log( personName == "abc" && personAge >= 18 && typeof personAge == "string" , typeof personAge, "check availability" )

var personTicket = true;
var personPass = false
console.log( personTicket || personPass, "check valid ticked or not" )

console.log( 7 != "85", "not operator" )

// 4. Increment and Decrement Operators

var age = 26;
age++;
console.log("age =", age)
age--;
console.log("age =", age)
age++;

console.log("age =", age)
age++;

console.log("age =", age)
age--;
age++
console.log("age =", age)




// 5. Comparision Operators

var balance = 250;
var transactionAmount = 150;

console.log(balance == transactionAmount)
console.log(balance > transactionAmount);
console.log(balance >= transactionAmount);
console.log(balance < transactionAmount);
console.log(balance <= transactionAmount)

// equality operator   == 

var totalBalance = 25000;
var myBalance = window.prompt("enter your balance")

console.log(typeof myBalance)
console.log( "balance amount =", totalBalance == myBalance)
console.log( "balance amount =", totalBalance === myBalance)



