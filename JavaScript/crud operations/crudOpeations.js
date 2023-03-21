console.log("array crud operations")

var fruits = ["apple","mano","papaya","grapes"];
console.log(fruits,"read")

fruits.push("banana")
console.log(fruits,"create")

fruits.splice(2,1)
console.log(fruits,"delete")

fruits.splice(1,1,"mango")
console.log(fruits,"update")

console.log("object crud operations")
var person = {
  name : "shiva"
}
console.log(person,"read");

person.age = 26;
console.log(person,"create");

person.age = 27;
console.log(person,"update")

delete person.age
console.log(person,"delete")

let employeesData = [
  {
   "name": "name 1",
   "age": "age 1",
   "designation": "designation 1",
   "id": "1"
  },
  {
   "name": "name 2",
   "age": "age 2",
   "designation": "designation 2",
   "id": "2"
  },
  {
   "name": "name 3",
   "age": "age 3",
   "designation": "designation 3",
   "id": "3"
  },
  {
   "name": "name 4",
   "age": "age 4",
   "designation": "designation 4",
   "id": "4"
  },
  {
   "name": "name 5",
   "age": "age 5",
   "designation": "designation 5",
   "id": "5"
  },
  {
   "name": "name 6",
   "age": "age 6",
   "designation": "designation 6",
   "id": "6"
  },
  {
   "name": "name 7",
   "age": "age 7",
   "designation": "designation 7",
   "id": "7"
  },
  {
   "name": "name 8",
   "age": "age 8",
   "designation": "designation 8",
   "id": "8"
  }
 ]

 console.log(employeesData)

 employeesData.push(  {
  "name": "name 9",
  "age": "age 9",
  "designation": "designation 9",
  "id": "9"
 })

 console.log(employeesData)

//  const employeeNames = employeesData.map((item,index) => {
//   return item.name
//  } )
//  console.log(employeeNames)

 const afterEmployeeDelete = employeesData.filter((item,index) => item.name !== "name 2" )
 console.log(afterEmployeeDelete)
 employeesData = afterEmployeeDelete

 const editEmployeeData = employeesData.map((item,index) => item.name == "name 1" ? {...item,name : "shiva"} : item );
 console.log(editEmployeeData,"em")

 let count = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var timer;

document.getElementById("stop").style.display = "none"
document.getElementById("reset").style.display = "none"
document.getElementById("restart").style.display = "none"

const startStopWatch = () => {
  
   timer = setInterval(() => {
    count += 1;
    seconds = count % 60
    minutes = parseInt((count / 60)% 60)
    hours = parseInt(count/3600)
    document.getElementById("time").innerHTML = `${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds} `
  },1000)

  hideButton("start")
  showbutton("stop")
  showbutton("reset")
  showbutton("restart")
}

const stopTimer = () => {
  clearInterval(timer)
  showbutton("start")
  hideButton("reset")
  hideButton("restart")
  hideButton("stop")
}

const resetTimer = () => {
  clearInterval(timer)
  count = 0;
  showbutton('start')
  hideButton("stop")
}

const restartTimer = () => {
  clearInterval(timer)
  count = 0;
  startStopWatch();
}

const showbutton = (id) => {
  document.getElementById(id).style.display = "inline-block"
}

const hideButton = (id) => {
  document.getElementById(id).style.display = "none"
}
