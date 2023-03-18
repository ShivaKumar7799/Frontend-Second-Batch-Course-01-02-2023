// const fruits = ["apple","papaya","guava","mango","orange"]

// for(let i = 0; i < fruits.length ;i++){
//   console.log("fruit Name =", fruits[i])
// }

// console.log("reverse order")
// for(let i = fruits.length; i > 0  ;i--){
//   console.log("fruit Name =", fruits[i-1])
// }

// console.log("using for of loop")

// for( i of fruits){
//   console.log(i)
// }

// console.log("reverse order using for of loop")

// for( i of fruits){
//   console.log(i)
// }
// console.log("reverse order")

// for ( i in fruits){
//   console.log(fruits[fruits.length - 1 - i])
// }


// objects looping

var ravi = {
  name : "Ravi",
  age : 25,
  rollNo : 15,
  group : "B.Sc",
  ravimarks : {
    telugu : 38,
    hindi : 75,
    english : 80,
    maths : 18,
    science : 34,
    social : 46
  }
}

const raviFailedSubjects = []

for( i in ravi){
  console.log(`Property = ${i} and value = ${ravi[i]}`)
}

for( i in ravi.ravimarks){
   console.log(i,ravi.ravimarks[i])
   if(ravi.ravimarks[i] < 35 ){
    raviFailedSubjects.push({
      failedSubjectName : i,
      failedSubjectMarks : ravi.ravimarks[i]
    })
   }
}

console.log(raviFailedSubjects)

document.getElementById("failedSubjects").innerHTML = JSON.stringify(raviFailedSubjects)
console.log(typeof JSON.stringify(raviFailedSubjects))

let displayFailed = []

for(i of raviFailedSubjects){
  displayFailed.push(i.failedSubjectName);
}

console.log(displayFailed)

document.getElementById("failedSubjects").innerHTML = displayFailed

const htmlDisplaySubjectWithMarks = raviFailedSubjects

console.log(htmlDisplaySubjectWithMarks)

const htmlArray = []
for(i of htmlDisplaySubjectWithMarks){
  // console.log(i.failedSubjectName, i.failedSubjectMarks)
  htmlArray.push(`${i.failedSubjectName} : ${i.failedSubjectMarks}`)
  // console.log(i)
  // for(j in i){
  //    console.log()
  // }
}
console.log(htmlArray)

document.getElementById("subjectWithMarks").innerHTML = htmlArray;

let raviKeys = Object.keys(ravi)
console.log(raviKeys)

let raviValues = Object.values(ravi)
console.log(raviValues)

let raviKeysAndValues = Object.entries(ravi)
console.log(raviKeysAndValues)

const raviDetails = {...ravi}
console.log(raviDetails)

localStorage.setItem("Ravi", JSON.stringify(raviDetails))

let fetchedRaviDetails = localStorage.getItem("Ravi")
console.log(JSON.parse(fetchedRaviDetails) )

setTimeout(() => {
  const raviDetails = {...ravi}
  console.log(raviDetails)

  localStorage.setItem("Ravi", JSON.stringify(raviDetails))

  let fetchedRaviDetails = localStorage.getItem("Ravi")
  console.log(JSON.parse(fetchedRaviDetails) );

  const prasadDetails = {...ravi}
  prasadDetails.name = "Prasad"
  console.log(prasadDetails)

  sessionStorage.setItem("Prasad", JSON.stringify(prasadDetails))

  let fetchedPrasadDetails = sessionStorage.getItem("Prasad")
  console.log(JSON.parse(fetchedPrasadDetails) )
}, 10000);