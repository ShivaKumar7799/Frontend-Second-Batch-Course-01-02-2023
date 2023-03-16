const ramuDetails = {
  firstName : "Krishna",
  lastName : "Prasad",
  age : 20,
  collegeName : "abc college",
  rollNo : 123,
  favouriteColors : ["red", "blue","green"],
  fullName : function(){
            console.log(this.firstName + " " + this.lastName)
  }
}

console.log(ramuDetails)
console.log(ramuDetails.firstName)
console.log(ramuDetails.lastName)

ramuDetails.branch = "MPC"

console.log(ramuDetails)
console.log(ramuDetails.branch)

delete ramuDetails.rollNo

console.log("after removing roll No", ramuDetails)

ramuDetails.lastName = "prasanth"

console.log(ramuDetails)

const fullName = ramuDetails.firstName + " " + ramuDetails.lastName;
console.log(fullName)

ramuDetails.fullName()

const varma = {
  firstName : "varma",
  lastName : "kumar",
  age : 22,
  collegeName : "abc college",
  rollNo : 124,
  favouriteColors : ["gray", "blue","white"],
  fullName : function() {
    console.log(this)
  }
}

varma.fullName()


var a = 10;

function printName (){
  console.log("printName")
}
console.log(this)

printName()