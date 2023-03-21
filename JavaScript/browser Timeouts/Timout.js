// setTimeout

setTimeout( showLogin  , 5000)

function showLogin(){
  document.getElementById("loginDiv").style.display = "block"

}

// setInterval

var trafficLights = ["red","green","yellow"]
var count = 0;


document.getElementById("signalLight").innerHTML = trafficLights[0]

var trafficTimer = setInterval(() => {
    count = count + 1;
    document.getElementById("signalLight").innerHTML = trafficLights[count]
    if(count == 2){
      count = -1
    }

    var time = new Date()
    var hours = time.getHours()
    var minutes = time.getMinutes()
    console.log(hours, minutes)
    if(hours == 11 && minutes == 3){
      clearInterval(trafficTimer)
      document.getElementById("signalLight").innerHTML = trafficLights[2]
    }

}, 3000);



