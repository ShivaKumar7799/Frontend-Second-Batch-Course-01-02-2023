const cars = ["mahindra", "BMW", "Audi", "Ferrari","verna"]
console.log(cars)
console.log("first car",cars[0])
console.log(cars[1])
console.log(cars[3])

const noOfCars = cars.length;
console.log(noOfCars)
document.getElementById("totalCars").innerHTML = noOfCars;

console.log("last car is", cars[noOfCars - 1])

// adding elements at the end of the array using push method

console.log(cars)
cars.push("scoda")
cars.push("Maruthi")
console.log(cars)

//pop method used to remove the items from the end of the array
const removedCars = []
const removedItem = cars.pop();
removedCars.push(removedItem)
removedCars.push(cars.pop())
removedCars.push(cars.pop())
removedCars.unshift(cars.pop())
console.log("removed car is ",removedItem)

console.log(cars, "after using pop method")
cars.push(removedItem)
console.log(cars)

//shift method used to remove items to the start of the array

console.log(cars)
cars.shift()
console.log(cars)

//unshift method used to add items to the start of the array

cars.unshift("tesla")
console.log(cars)

console.log("removed cars data", removedCars)

console.log(cars)
let carsStringData = cars.toString()
console.log(carsStringData)

let joinedCarsData = cars.join(" - ")
console.log(joinedCarsData)

//slice method used to cut the part of the array
//it will not modify the original array

console.log(cars)
const selectedCars = cars.slice(2,4)
console.log(selectedCars)
const favouriteCar = cars.slice(1,2)
console.log(favouriteCar)
console.log(cars)

//splice method used to add and remove items at any part of the array

cars.splice(2,0,"scorpia", "tesla")
console.log(cars)

// sort method is used to sort the data in ascending order

const sortedCarsData = cars.sort()
console.log(cars)

//reverse method used to reverse the items in the array

const reversedData = cars.reverse()
console.log(reversedData)

const iitRanks = [10,30,200,12,48,372,2883,282]

const firstRank = Math.min.apply(null, iitRanks)
console.log(firstRank)

const lastRank = Math.max.apply(null, iitRanks)
console.log(lastRank)

const sortedRanks = iitRanks.sort( (a,b) => b -a )
console.log(sortedRanks)

console.log(iitRanks)
console.log(cars)