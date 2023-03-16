function getResult(){
  var subjects = []
  const collection = document.getElementsByClassName("marks")
  for (let i = 0; i < collection.length; i++) {
    subjects.push({
      subjectName : collection[i].name,
      marks : Number(collection[i].value)
    })
  }
  var total = 0
  subjects.forEach((item) => total += item.marks )
  document.getElementById("total").innerHTML = `<h3> Total : ${total} </h3>`

  var percentage = total/subjects.length
  document.getElementById("percentage").innerHTML = `<h3> Percentage : ${percentage} </h3>`

  if(percentage == 100){
    printGrade("0")
  }else if(percentage > 90 && percentage < 100){
    printGrade("A")
  }else if(percentage > 80 && percentage < 90){
    printGrade("B")
  }else if(percentage > 70 && percentage < 80){
    printGrade("C")
  }else if(percentage > 60 && percentage < 70){
    printGrade("D")
  }else if(percentage > 50 && percentage < 60){
    printGrade("E")
  } else{
    printGrade("F")
  }

  let failedSubjects = subjects.filter((item) => item.marks < 35 )
  failedSubjects = failedSubjects.map((item) => item.subjectName.charAt(0).toUpperCase() + item.subjectName.slice(1) )
  document.getElementById("failedSubjects").innerHTML = `<h3> Failed Subjects : ${failedSubjects.join(", ")} </h3>` 
  document.getElementById("result").innerHTML = `<h3> Result : ${failedSubjects.length > 0 ? "Fail" : "Pass" } </h3>`
}

function printGrade(grade){
    document.getElementById("grade").innerHTML = `<h3> Grade : ${grade} </h3>`
}




// let drawingMarks = 12
// let es = 45
// let history= 33

// const faileedSub = []

// if(drawingMarks < 35){
//   faileedSub.push("drawing")
// }
// if(es < 35){
//   faileedSub.push("es")
// }

// if(history < 35){
//   faileedSub.push("history")
// }

// document.getElementById("faileedSub").innerHTML = faileedSub.join(", ")