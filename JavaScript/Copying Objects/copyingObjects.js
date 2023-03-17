const ravi = {
  name : 'Ravi',
  age : 25,
  class: "6th",
  rollNo : 1,
  school : "abc"
}
ravi.age = 13

// const prasad = {
//   name : 'Prasad',
//   age :  12,
//   class: "6th",
//   rollNo : 2,
//   school : "abc"
// }

// const aravind = {
//   name : "Aravind",
//   age : 13,
//   class : "7th",
//   rollNo : 1,
//   school : "abc"
// }

console.log(ravi)
// console.log(prasad)
// console.log(aravind)

// constructor function

function StudentData(name, age, standardClass, rollNo, schoolName){
    this.name = name;
    this.age = age;
    this.class = standardClass
    this.rollNo = rollNo
    this.school = schoolName
}

const raviConstructedData = new StudentData("Ravi", 13, "6th", 1, "abc school")
const prasadConstructedData = new StudentData("Prasad", 12, "6th",2, "abc")

raviConstructedData.school = "abc"
console.log("ravi data",raviConstructedData)
console.log("prasad data",prasadConstructedData)


// copying objects (shallow copy)

const ramesh = {
  name : "Ramesh",
  surName : "abc",
  age : 14,
  phNo : 12345,
  city : "hyderabad"
}

console.log(ramesh)

const suresh = ramesh

console.log(suresh, "copied object from ramesh using assignment operator");

suresh.name = "Suresh"

console.log(suresh, "after changing suresh name")
console.log(ramesh, "ramesh data" )

ramesh.name = "Ramesh"

console.log(ramesh, "after changing ramesh name")
console.log(suresh, " suresh name after ramesh changed ramesh name" )

// copying objects deep copy using spread operator and Object.assign method

const ram = {
  name : "Ram",
  age : 13,
  bloodGroup : "A +ve",
  city : "visakhapatnam"
}

const lakshman = {...ram}
console.log(ram, "ram data")
console.log(lakshman, "lakshman data")

lakshman.name = "Lakshman";
lakshman.bloodGroup = "O +ve"

console.log(ram, "after changing laskhman name and blood group");
console.log(lakshman, "after modifying name and blood gropu")

// deep with objec.assing()

const bharat = Object.assign({}, ram)
console.log(bharat, "bharat data")

bharat.name = "Bharat"
bharat.bloodGroup = "AB +ve"

console.log(ram, "ram data")
console.log(bharat, "bharat data")

// creating object using new keyword

var b = new Object()

// we can create a object using empty curly braces, constructor function,
// spread operator and Object.assing

var a = {}
console.log(typeof a,a,"with curly braces")
console.log(typeof raviConstructedData,"constructor function")
console.log(typeof suresh, "shallow copy")
console.log(typeof lakshman,"spread operator")
console.log(typeof bharat,"object.assing() method")
console.log(typeof b,b, "using new keyword")