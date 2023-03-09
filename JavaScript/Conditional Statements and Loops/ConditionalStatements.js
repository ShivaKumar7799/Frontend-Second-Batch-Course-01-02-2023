
// if Condition

// if(condition){
//   code to be executed
// }

function getAgeValue(){

  var voterAge = document.getElementById("voterAge").value;
  console.log(voterAge)

  if(voterAge >= 18){
    console.log("eligible to vote");
    document.getElementById("eligibility").innerHTML = "eligible to vote"

  } else {
    console.log("not eligible to vote")
    document.getElementById("eligibility").innerHTML = "not eligible to vote"
  }

}

// else if

let percentage = 83;

if(percentage == 100){
  console.log("O grade")
} else if(percentage >= 91 && percentage <= 99){
  console.log("A grade")
} else if(percentage >= 81 && percentage <=90 ){
  console.log("B grade")
} else if(percentage >= 71 && percentage <=80){
  console.log("C grade")
} else if(percentage >= 61 && percentage <=70){
  console.log("d grade")
} else if(percentage >= 0 && percentage <=60){
  console.log("failed- No grade obtained")
} else {
  console.log("Please enter a valid percentage value")
}



