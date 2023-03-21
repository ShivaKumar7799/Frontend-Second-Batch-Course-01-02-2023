
function counter(){
  var count = 0;
  const increment = () => {
    count = count + 1;
    console.log(count)
  }
  const decrement = () => {
    count = count - 1;
    console.log(count)
  }

  return {
    increment : increment,
    decrement : decrement
  }
}

var akhilCounter = counter()

var aravindCounter = counter()

var vishnuCounter = counter()