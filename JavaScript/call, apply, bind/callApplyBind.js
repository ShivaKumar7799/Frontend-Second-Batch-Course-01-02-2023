const ravi = {
  firstName : "Ravi",
  lastName : "abc",
  fullName : function(){
    console.log(this.firstName + " "  + this.lastName)
  }
}

ravi.fullName()

const vishnu = {
  firstName : "Vishnu",
  lastName : "bca",
}

const prasad = {
  firstName : "Prasad",
  lastName : "Cba"
}

const getFullName = {
  fullName : function(city,age){
    if(city == undefined){
      city = ""
    }
    if(age == undefined){
      age = 20
    }
   console.log(this.firstName + " "  + this.lastName + " " + city + " " + age)
  }
}

getFullName.fullName.call(vishnu)
const prasadFullName = getFullName.fullName.bind(prasad)
prasadFullName()

getFullName.fullName.call(ravi,"hyd","45")
getFullName.fullName.apply(ravi,["hyd",34])