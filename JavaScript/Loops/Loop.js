// while loop

let x = 10;

while(x > -10){
  if( x % 2 == 1 || x % 2 == -1 ){
    console.log("odd number", x)
  } else if(x == 0) {
    console.log(x) 
  } else {
    console.log("even number", x)
  }
  x--
}

// do while 

do{
  var age = window.prompt("please enter your age");
  console.log(age);
}while(!(age > 0 && age <= 200))

// for loop

for(i = 20; i <= 30; i++){
  console.log(i)
  if(i == 25){
   console.log("25th value",i)
  }
}

var myName = "shiva kumar"

for(let i = 0; i < myName.length; i++){
  console.log(myName.charAt(i))
}

const fruits = ["apple", 'banana', "grapes", "papaya"]

for(let i = 0; i < fruits.length ; i++){
  console.log( i + 1 , fruits[i])
}

// switch 

var presentDay = window.prompt("Please enter a day")
var holiday = ""

switch(presentDay){
  case "monday" : 
      holiday = "no Holiday"
      break;
      case "tuesday" : 
      holiday = "no Holiday"
      break;
      case "wednesday" : 
      holiday = "no Holiday"
      break;
      case "thursday" : 
      holiday = "no Holiday"
      break;
      case "friday" : 
      holiday = "no Holiday"
      break;
      case "saturday" : 
      holiday = "Holiday"
      break;
      case "sunday" : 
      holiday = "Holiday"
      break;
      default : 
      holiday = "please enter valid day"

}

console.log("today is", holiday)

var date = Number(window.prompt("Please enter today date"))
var holidayName = ""

if(date > 0 && date <=31){
  debugger
  switch(date){
    case 1 : {
      holidayName = "New Year";
      break
    }
    case 15 : {
      holidayName = "Sankranthi"
      break
    }
    case 26 : {
      holidayName = "Republic day"
      break
    }
    default : {
      holidayName = "Not a holiday"
    }
  }
} else {
  holidayName = "Please enter a vaild day"
}

console.log("today is ",holidayName)

