var dynamicNames = []

function addName(){
  var name = document.getElementById("itemName").value;
  dynamicNames.push(name)
  document.getElementById("itemName").value = ""
  document.getElementById("result").innerHTML = dynamicNames.join(", ")
}

function removeName(){
  const deleteName = document.getElementById("itemName").value;
  const items = dynamicNames.filter((item) => item !== deleteName )
  document.getElementById("itemName").value = ""
  document.getElementById("result").innerHTML = items.join(", ")
  dynamicNames = items

}