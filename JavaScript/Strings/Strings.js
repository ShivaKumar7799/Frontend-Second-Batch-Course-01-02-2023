var carName = "Maruthi Suziki"

var carFirstName = "Maruthi"
var carLastName = "Suziki"

document.getElementById("carLength").innerHTML = carName.length
// console.log(carName.length)

// console.log(carName.toUpperCase())
// console.log(carName.toLowerCase())

console.log(carFirstName + " "+ carLastName)
console.log(carFirstName.concat(" ", carLastName))

var newCar = "    tesla    "
// newCar = newCar.trim()
console.log(newCar.trim().length)

  
let newPara = "Lorem, ipsum dolor sit Verna amet consectetur adipisicing elit. Et aliquam est atque ut odit, voluptas mollitia recusandae numquam, qui ullam doloremque quae error necessitatibus blanditiis officia, maiores vitae illo illum!"
console.log(newPara.includes("tesla"))

let bikeName = "Yamaha 315 engine 315"
console.log(bikeName.replace("315","200"))
console.log(bikeName.replaceAll("315","200"))


let myName = "shiva kumar"
console.log("my first name is", myName.slice(0,5))
console.log("my Last name is", myName.slice(6,myName.length))
console.log("my Last name is", myName.slice(6,11))

console.log("First letter in my name is", myName.charAt(0).toUpperCase())
console.log("last letter in my name is", myName.charAt(myName.length-1).toUpperCase())

let courses = "html css js reactjs"
console.log(courses)
console.log(courses.split(" "))

















